import { FC } from "react";
import { Email, Password } from "../Forms";
import { styles } from "./RegisterStyles";
import RedirectToRegister from "./redirect";
import SubmitButton from "./submitButton";

const BuildLogin: FC = () => {

    return (
        <div className={ styles.wrap_register_forms }>
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