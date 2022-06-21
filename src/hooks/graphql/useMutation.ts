import { useEffect, useRef, useState } from "react"
import { check_env } from "../../check_env"
import Loading from "../../Components/Auth/Forms/Loading"

type queryStateType = {
    data: any, 
    loading: boolean, 
    error: string| undefined
}

export const useMutation: ( ) => [ 
    queryStateType, 
    (
        query: string, 
        vars: { args: any } 
    ) => Promise<void> ] 
= ( ) => {

    const mutationRef = useRef<queryStateType>( { 
        data: undefined, 
        loading: false, 
        error: undefined 
    } )

    const [ data, setData ] = useState<queryStateType>( { 
        data: undefined, 
        loading: false, 
        error: undefined 
    } )

    const queryData: (
        query: string, 
        vars: { args: any } 
    ) => Promise<void> 
    = async( query, { args } ) => {

        mutationRef.current = { 
            data: undefined, 
            loading: true,
            error: undefined, 
        }

        const res = await fetch( `${ check_env }/graphql`, {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
              },
            body: JSON.stringify( { query, variables: args } )
        } )

        if( !res.ok ) {
            const error = await res.text()
            mutationRef.current = { 
                data: undefined, 
                loading: false,
                error, 
            }
    
        }

        const data = await res.json()
        
        mutationRef.current = { 
            data: data?.data, 
            loading: false,
            error: undefined, 
        }
        setData( mutationRef.current )
    }
    return [data, queryData ]
}