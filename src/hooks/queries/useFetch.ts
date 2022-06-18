import { useEffect, useState } from "react"

type useFetchVars = {
    
    /**
     * @param method POST or GET, set to POST by default,
     * @param body variables for body, 
     * @param headers headers, set to Content-Type: application/json by default
     */
 
    method?: "POST" | "GET", 
    headers?: HeadersInit,
    body?: any
}

type resDataType = {
    data: any, 
    loading: boolean,
    error: string | undefined
}
    /**
     * @function useFetch
     * @param link is a link
     * @param vars is an object that takes
     * method set to POST by default, 
     * headers set to application/json by default, 
     * and body
     */
export const useFetch: (
    link: string, 
    vars: useFetchVars
) => resDataType[]
 = ( 
    link: string, 
    { method, body, headers }: useFetchVars 
): resDataType[] => {

    const [ result, setResult ] = useState<resDataType>( { 
        data: undefined, 
        loading: false,
        error: undefined 
    } )

    useEffect( () => {

        ( async() => {

            setResult( {
                data: undefined, 
                loading: true,
                error: undefined
            } ) 

            const data = await fetch( link, {
                method: method || "POST",
                headers: headers || {
                    'Content-Type': 'application/json',
                }, 
                credentials: 'include',
                body: JSON.stringify( body )
            } ).then( res => res.json() )

            if( !data.ok ) {
                const error = await data.text()
                setResult( {
                    data: undefined, 
                    loading: false,
                    error
                } ) 
            }

            const res = await data
            setResult( {
                data: res, 
                loading: false,
                error: undefined
            } ) 
        } )()

    }, [] )

    return [ result ]
}