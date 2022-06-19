import { FC } from "react";
import CreateNewProject from '../CreateNewProject';
import { styles } from "./MainscreensStyles";

const Mainscreen: FC = () => {

    return (
        <div className={ styles.mainscreen_wrap }>
            <CreateNewProject/>
        </div>
    )
}

export default Mainscreen