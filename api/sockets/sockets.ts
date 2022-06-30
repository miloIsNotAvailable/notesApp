import { Server } from 'socket.io'
import { server } from '../createAppServer'
import { of, fromEvent, map, Observable, switchMap } from 'rxjs'

export default function Sockets() {

    const _io = new Server( server, {
        cors: {
          allowedHeaders: ['Content-Type', 'Authorization'],
          credentials: true,
          origin: ['http://localhost:3000', 'http://localhost:4000', 'https://app-of-the-heck.herokuapp.com/', 'https://notes-app-three-beta.vercel.app']
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
         _io.emit( 'msg', { msg: 'hello' } )
     } )

     io.pipe( 
         switchMap(
             socket => of( { msg: 'hello' } )
             .pipe(
                 map( data => ( { socket, data } ) )
             )
         )
     ).subscribe(
         ( { data, socket } ) => {
            _io.emit( 'msg', data )
         }
     )

    // _io.on( "connection", () => {
    //   console.log( 'socket connected' )
    // } )
}