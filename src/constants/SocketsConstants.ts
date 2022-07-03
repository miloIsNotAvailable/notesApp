import { Observable, of } from "rxjs"
import { io, connect } from "socket.io-client"
import { check_env } from "../check_env"

export const _socket = io( `${check_env}` )
export const socket: Observable<typeof _socket> = of( _socket )