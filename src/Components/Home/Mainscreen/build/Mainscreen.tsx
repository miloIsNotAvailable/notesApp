import { FC, useEffect } from "react";
import { io } from "socket.io-client";
import { check_env } from "../../../../check_env";
import CreateNewProject from '../CreateNewProject/build';
import Notes from "../Notes/build";
import DisplayNote from "../Notes/DisplayNote";
import { styles } from "./MainscreensStyles";
import { of, fromEvent, map, Observable, switchMap } from 'rxjs'

const Mainscreen: FC = () => {

    const _socket = io( check_env )
    const socket: Observable<typeof _socket> = of( _socket )

    useEffect( () => {

        socket.pipe(
            switchMap(
                socket => fromEvent( socket, 'connect' )
                .pipe(
                    map( () => socket )
                )
            )
        ).subscribe( socket => {
            console.log( 'connected socket' )
        } )

        // _socket.on( 'connect', () => {
        //     console.log( 'connected' )
        // } )
    }, [] )

    socket.pipe(
        switchMap(
            socket => fromEvent( socket, 'msg' )
            .pipe(
                map( ( data ) => ( { data, socket } ) )
            )
        )
    ).subscribe( ( { data } ) => {
        // console.log( data )
    } )

    return (
        <div className={ styles.mainscreen_wrap }>
            <CreateNewProject/>
            <Notes/>
            <DisplayNote/>
        </div>
    )
}

export default Mainscreen