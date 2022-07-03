import { Server } from 'socket.io'
import { server } from '../createAppServer'
import { of, fromEvent, map, Observable, switchMap } from 'rxjs'

export default function Sockets() {

    const _io = new Server( server, {
        // transports: [ 'websocket' ],
        cors: {
          allowedHeaders: ['Content-Type', 'Authorization'],
          credentials: true,
          origin: ['http://localhost:3000', 'http://localhost:4000', 'https://app-of-the-heck.herokuapp.com/', 'https://notes-app-three-beta.vercel.app'],
          methods: [ 'GET', 'POST' ]
        }
    } )
    
    const io: Observable<typeof _io> = of( _io )
    io.pipe( 
        switchMap( 
            socket => fromEvent( socket, "connection" )
            .pipe(
                map( () => socket )
            )
         )
     ).subscribe( socket => {
         console.log( 'connected socket' )
         socket.emit( 'msg', { msg: 'hello' } )
         _io.on( 'message', console.log )
        } )
    
    io.pipe( 
        switchMap( 
            socket => fromEvent( socket, "message" )
            .pipe(
                map( () => socket )
            )
         )
     ).subscribe( socket => {
         console.log( 'connected socket' )
         socket.emit( 'connection', null )
         socket.emit( 'msg', { msg: 'hello' } )
         _io.on( 'message', console.log )
        } )
    }