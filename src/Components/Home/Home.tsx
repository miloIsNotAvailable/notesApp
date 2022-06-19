import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { check_env } from "../../check_env";
import { CreateUserContext, useData } from "../../contexts/HomeContext";
import { useFetch } from "../../hooks/queries/useFetch";
import { styles } from "./HomeStyles";
import Navbar from "./Navbar/build/Navbar";

const Home: FC = () => {

    const { UserContextProvider } = useData()

    return (
        <UserContextProvider value={ null }>
            <div className={ styles.home_wrap } >
                <Navbar/>
            </div>
        </UserContextProvider>
    )
}

export default Home