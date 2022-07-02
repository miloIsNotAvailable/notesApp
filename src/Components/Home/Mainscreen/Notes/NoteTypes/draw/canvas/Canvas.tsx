import { FC, MouseEvent, useEffect, useRef, useState } from "react";
import { fromEvent, map, of, switchMap } from "rxjs";
import { socket, _socket } from "../../../../../../../constants/SocketsConstants";
import { setNewBrushState, setNewColorState } from "../../../../../../../interfaces/reduxInterfaces/Home/homeReduxInterfaces";
import { useAppSelector } from "../../../../../../../store/hooks";
import { styles } from "../build/NoteCanvasStyles";
import { draw } from "./draw";

const Canvas: FC = () => {

    const [coords, setCoords] = useState<{ 
        prevx: number, 
        prevy: number,
        x: number, 
        y: number 
    }>( { prevx: 0, prevy: 0, x: 0, y: 0 } )
    const [mouseDown, setMouseDown] = useState<boolean>( false )
    const canvasRef = useRef<HTMLCanvasElement | null>( null )

    const selector = useAppSelector( ( state: setNewColorState ) => state.getNewColor.color )
    const brush = useAppSelector( ( state: setNewBrushState ) => state.getNewBrush.brush )

    useEffect(() => {
        if( !canvasRef.current ) return
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        socket.pipe(
            switchMap(
                socket => fromEvent( socket, 'msg' )
                .pipe(
                    map( data => ( { socket, data } ) )
                )
            )
        ).subscribe( ( { data, socket } ) => {
            console.log( data )
            socket.emit( 'message', { ye: 'ye' } )
        } )

        socket.pipe(
            switchMap(
                socket => fromEvent( socket, 'm' )
                .pipe(
                    map( data => ( { socket, data } ) )
                )
            )
        ).subscribe( ( { data, socket } ) => {
            console.log( data, socket.emit( 'message', { ye: 'ye' } ) )
            socket.emit( 'message', { ye: 'ye' } )
        } )

        draw( {
            context, 
            coords, 
            mouseDown, 
            selector,
            brush
        } )
      }, [ coords ])

    return <canvas 
            id="canvas"
            width={ window.innerWidth }
            height={ window.innerHeight - window.innerHeight * .09 }
            ref={ canvasRef }
            className={ styles.canvas }
            onMouseDown={ ( { pageX, pageY } ) => {
                setMouseDown( true ) 
                setCoords( { 
                    // when x is zero set to mouse's current coords, 
                    // else get the previous ones
                    prevx: pageX,
                    prevy: pageY,
                    x: pageX, 
                    y: pageY 
                } ) 
            }}
            onMouseMove={ ( { pageX, pageY } ) => 
            mouseDown && 
            setCoords( 
                ( { x, y } ) => ({ 
                    prevx: !x ? pageX : x,
                    prevy: !y ? pageY : y,
                    x: pageX, 
                    y: pageY 
                } ) 
            ) }
            onMouseUp={ ( { pageX, pageY } ) => { 
                setMouseDown( false ) 
            }}
            onPointerDown={ ( { pageX, pageY, pointerType } ) => {
                
                if( pointerType !=="pen" ) return

                setMouseDown( true ) 
                setCoords( { 
                    // when x is zero set to mouse's current coords, 
                    // else get the previous ones
                    prevx: pageX,
                    prevy: pageY,
                    x: pageX, 
                    y: pageY 
                } ) 
            }}
            onPointerMove={ ( { pageX, pageY, pointerType } ) => 
            mouseDown && pointerType ==="pen" && 
            setCoords( 
                ( { x, y } ) => ({ 
                    prevx: !x ? pageX : x,
                    prevy: !y ? pageY : y,
                    x: pageX, 
                    y: pageY 
                } ) 
            ) }
            onPointerUp={ ( { pageX, pageY, pointerType } ) => {
                if( pointerType !=="pen" ) return 
                setMouseDown( false ) 
            }}
        />
    }

export default Canvas