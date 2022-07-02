import { Observable, of } from "rxjs"
import { io } from "socket.io-client"
import { check_env } from "../check_env"

export const _socket = io( `${check_env}`, {    
    withCredentials: true, 
    reconnection: true,
    transports: [ 'websocket' ]
} )
export const socket: Observable<typeof _socket> = of( _socket )