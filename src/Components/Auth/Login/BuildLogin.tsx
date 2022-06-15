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
            <div className={ styles.wrap_submit }>
                <SubmitButton/>
                <RedirectToRegister/>
            </div>
        </div>
    )
}

export default BuildLogin