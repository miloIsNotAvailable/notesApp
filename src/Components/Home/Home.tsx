import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { check_env } from "../../check_env";
import { useFetch } from "../../hooks/queries/useFetch";
import { useLazyFetch } from "../../hooks/queries/useLazyFetch";
import { styles } from "./HomeStyles";
import Navbar from "./Navbar/build/Navbar";

const Home: FC = () => {

    const node_env: any = process.env.NODE_ENV
    const [ { data, error, loading } ] = useFetch( 
        `${ check_env }/home`, 
        { body: {} } 
    )

    const navigate = useNavigate()
    const [ logout, setLogout ] = useLazyFetch() 
    
    useEffect( () => {
        console.log( node_env )
        console.log( data, loading, error )
        // if( data && !data?.decoded?.id && !loading ) navigate( '/' ) 
    }, [ data, loading, error ] )

    return (
        <div className={ styles.home_wrap } 
        style={ {
            width: '100%',
            height: '100%',
        } }
        // onClick={ () => {
        //     setLogout( 'http://localhost:4000/logout' )
        //     navigate( '/' ) 
        // } }
        >
            {/* hello */}
            <Navbar/>
        </div>
    )
}

export default Home