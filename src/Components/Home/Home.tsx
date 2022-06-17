import { FC, useEffect } from "react";
import { useFetch } from "../../hooks/queries/useFetch";

const Home: FC = () => {

    const [ { data, error, loading } ] = useFetch( 
        'http://localhost:4000/home', 
        { body: {} } 
    )

    useEffect( () => {

        console.log( data, loading, error )
    }, [ data, loading, error ] )

    return (
        <div>
            hello
        </div>
    )
}

export default Home