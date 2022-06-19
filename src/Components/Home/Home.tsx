import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { check_env } from "../../check_env";
import { useFetch } from "../../hooks/queries/useFetch";
import { useLazyFetch } from "../../hooks/queries/useLazyFetch";
import { styles } from "./HomeStyles";
import Navbar from "./Navbar/build/Navbar";

const Home: FC = () => {

    const d = localStorage.getItem( 'accessToken' )

    const [ { data, error, loading } ] = useFetch( 
        `${ check_env }/get_home`, 
        { body: { accToken: d } } 
    )
    
    const navigate = useNavigate()
    const [ logout, setLogout ] = useLazyFetch() 
    
    useEffect( () => {        
        console.log( data, loading, error )
        if( data && !data?.decoded?.id && !loading ) navigate( '/' ) 
    }, [ data, loading, error ] )

    return (
        <div className={ styles.home_wrap } 
        style={ {
            width: '100%',
            height: '100%',
        } }
        onClick={ () => {
            // localStorage.setItem( 'accessToken', "" )
            // navigate( '/' ) 
        } }
        >
            {/* hello */}
            <Navbar/>
        </div>
    )
}

export default Home