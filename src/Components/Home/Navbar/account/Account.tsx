import { FC } from "react";
import AccountIcon from "./AccountIcon";
import AccountMenuBar from "./AccountMenuBar";
import { styles } from "./AccountStyles";

const Account: FC = () => {

    return(
        <div className={ styles.account_wrap } tabIndex={ 0 }>
            <AccountIcon />
            <AccountMenuBar />
        </div>
    )
}

export default Account