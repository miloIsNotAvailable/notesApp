import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/queries/useFetch";
import { useLazyFetch } from "../../hooks/queries/useLazyFetch";

const Home: FC = () => {

    const [ { data, error, loading } ] = useFetch( 
        'http://localhost:4000/home', 
        { body: {} } 
    )

    const navigate = useNavigate()
    const [ logout, setLogout ] = useLazyFetch() 

    useEffect( () => {

        console.log( data, loading, error )
        if( data && !data?.decoded?.id && !loading ) navigate( '/' ) 
    }, [ data, loading, error ] )

    return (
        <div onClick={ () => {
            setLogout( 'http://localhost:4000/logout' )
            navigate( '/' ) 
        } }>
            hello
        </div>
    )
}

export default Home