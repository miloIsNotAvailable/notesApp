import { useEffect, useState } from "react"
import { check_env } from "../../check_env";
import { useQueryType } from "../../interfaces/hooksInterfaces/graphqlTypes";

export const useQuery = ( 
    query: string, 
    vars: { variables: any }
) => {
    
    const [ data, setData ] = useState<useQueryType>( {
        data: undefined, 
        loading: false, 
        error: undefined
    } )

    useEffect( () => {
        
        console.log( vars )

        setData( { 
            data: undefined, 
            loading: true, 
            error: undefined 
        } )

        fetch(`${ check_env }/graphql`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({ query, ...vars })
          })
            .then( 
                async r => {
                    if( !r.ok ) {
                        
                        const error = await r.text()
                        return { 
                            error, 
                            data: undefined, 
                            loading: false 
                        }
                    }

                    const data = await r.json()
                    return { error: undefined, data, loading: false }
                } 
            )
            .then( setData );
    }, [] )

    return data
}