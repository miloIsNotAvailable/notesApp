import { FC } from "react";
import { Email, Password } from "../Forms";
import { styles } from "./LoginStyles";
import RedirectToRegister from "./redirect";
import SubmitButton from "./submitButton";

const BuildLogin: FC = () => {

    return (
        <div className={ styles.wrap_login_forms }>
            <Email/>
            <Password/>
            <SubmitButton/>
            <RedirectToRegister/>
        </div>
    )
}

export default BuildLogin