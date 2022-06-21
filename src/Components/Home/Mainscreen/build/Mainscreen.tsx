import { FC } from "react";
import CreateNewProject from '../CreateNewProject/build';
import Notes from "../Notes/build";
import { styles } from "./MainscreensStyles";

const Mainscreen: FC = () => {

    return (
        <div className={ styles.mainscreen_wrap }>
            <CreateNewProject/>
            <Notes/>
        </div>
    )
}

export default Mainscreen