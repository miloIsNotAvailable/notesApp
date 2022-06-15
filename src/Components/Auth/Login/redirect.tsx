import { FC } from "react";
import { Link } from "react-router-dom";
import { styles } from "./LoginStyles";

const RedirectToRegister: FC = () => {

    return (
        <Link 
            to={ "/signup" }
            className={ styles.login_redirect }
        >
            sign up
        </Link>
    )
}

export default RedirectToRegister