import { FC, useEffect } from "react";
import { io } from "socket.io-client";
import { check_env } from "../../../../check_env";
import CreateNewProject from '../CreateNewProject/build';
import Notes from "../Notes/build";
import DisplayNote from "../Notes/DisplayNote";
import { styles } from "./MainscreensStyles";
import { of, fromEvent, map, Observable, switchMap } from 'rxjs'
import { socket, _socket } from "../../../../constants/SocketsConstants";

const Mainscreen: FC = () => {

    return (
        <div className={ styles.mainscreen_wrap }>
            <CreateNewProject/>
            <Notes/>
            <DisplayNote/>
        </div>
    )
}

export default Mainscreen