import { createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { check_env } from "../check_env";
import { useFetch } from "../hooks/queries/useFetch";
import { userDataType } from "../interfaces/homeInterfaces/homeTypes";

export const CreateUserContext = createContext( null )
export const UserContextProvider = CreateUserContext.Provider

export const useData = () => {

    const d = localStorage.getItem( 'accessToken' )

    const [ { data, error, loading } ] = useFetch( 
        `${ check_env }/get_home`, 
        { body: { accToken: d } } 
    )
    
    const navigate = useNavigate()
    
    useEffect( () => {        
        console.log( data, loading, error )
        if( data && !data?.decoded?.id && !loading ) navigate( '/' ) 
    }, [ data, loading, error ] )

    const CreateUserContext = createContext( data?.decoded )
    const UserContextProvider = CreateUserContext.Provider
    const userContext: userDataType = useContext( CreateUserContext )

    return { ...userContext, loading, error, UserContextProvider }
}