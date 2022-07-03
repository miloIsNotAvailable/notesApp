import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { fromEvent, map, switchMap } from "rxjs";
import { check_env } from "./check_env";
import AppRoutes from "./Components/Routes/AppRoutes";
import { socket, _socket } from "./constants/SocketsConstants";

function App() {

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
        socket.emit( 'message', { ye: 'ye' } )
    } )

    // _socket.on( 'connect', () => {
    //     console.log( 'connected' )
    // } )
} )

  return (
    <div>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </div>
  )
}

export default App
