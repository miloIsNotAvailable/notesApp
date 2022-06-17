import { FC } from "react";
import RefreshIcon from "./RefreshIcon";
import { styles } from "./RefreshStyles";

const Refresh: FC = () => {

    return(
        <div className={ styles.refresh_wrap }>
            <RefreshIcon />       
        </div>
    )
}

export default Refresh