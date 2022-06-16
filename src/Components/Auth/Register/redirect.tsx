import { FC } from "react";
import { Link } from "react-router-dom";
import { styles } from "./RegisterStyles";

const RedirectToRegister: FC = () => {

    return (
        <Link 
            to={ "/" }
            className={ styles.register_redirect }
        >
            go back
        </Link>
    )
}

export default RedirectToRegister