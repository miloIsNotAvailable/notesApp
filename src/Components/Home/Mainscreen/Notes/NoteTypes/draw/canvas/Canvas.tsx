import { FC, MouseEvent, useEffect, useRef, useState } from "react";
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
        />
    }

export default Canvas