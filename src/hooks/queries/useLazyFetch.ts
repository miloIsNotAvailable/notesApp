import { useState } from "react"

type useLazyFetchMethodType<T=unknown> = {
    method: "POST" | "GET", 
    headers: HeadersInit | undefined,
    body: T extends unknown ? any : T
}

export const useLazyFetch: <T=any>() => T | any = <T>() => {

    const [ result, setResult ] = useState<T | any | undefined>( undefined )
    const [ loading, setLoading ] = useState<boolean>( false ) 
    const [ error, setError ] = useState<string | undefined>( undefined ) 

    const setData: (
        link: string, 
        vars?: useLazyFetchMethodType | undefined
    ) => Promise<any>
    = async(
        link: string,
        vars?: useLazyFetchMethodType | undefined
    ) => {
        
        setLoading( true )

        const data = await fetch( link, {
            method: vars?.method, 
            body: vars?.body,
            headers: vars?.headers,
            credentials: "include"
        } )
        const res = await data.json()
        
        if( !data.ok ) ( async() => {
            const error = await data.text()
            setError( error )
            setLoading( false )
            setResult( undefined )
        } )()
        if( res ) setLoading( false )
        if( res ) setError( undefined )

        setResult( res )
    }

    return [ { data: result, loading, error }, setData ]
}