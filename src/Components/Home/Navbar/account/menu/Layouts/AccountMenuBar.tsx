import { FC } from "react";
import { styles } from "../../build/AccountStyles";
import Logout from "../options/Logout";

const AccountMenuBar: FC = () => {

    return( 
        <div className={ styles.account_menu_bar }>
            <Logout/>
        </div>
     )
}

export default AccountMenuBar