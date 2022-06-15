import { FC } from "react";
import { Email, Password } from "../Forms";
import { styles } from "./LoginStyles";

const BuildLogin: FC = () => {

    return (
        <div className={ styles.wrap_login_forms }>
            <Email/>
            <Password/>
        </div>
    )
}

export default BuildLogin