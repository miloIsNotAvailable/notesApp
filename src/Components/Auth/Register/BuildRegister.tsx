import { FC } from "react";
import { Email, Password } from "../Forms";
import { styles } from "./RegisterStyles";
import RedirectToRegister from "./redirect";
import SubmitButton from "./submitButton";
import Username from "../Forms/Username";

const BuildRegister: FC = () => {

    return (
        <div className={ styles.wrap_register_forms }>
            <Email/>
            <Password/>
            <Username/>
            <div className={ styles.wrap_submit }>
                <SubmitButton/>
                <RedirectToRegister/>
            </div>
        </div>
    )
}

export default BuildRegister