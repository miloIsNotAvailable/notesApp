import { FC, MouseEvent, useEffect, useRef, useState } from "react";
import { styles } from "../build/NoteCanvasStyles";

const Canvas: FC = () => {

    const [coords, setCoords] = useState<{ 
        prevx: number, 
        prevy: number,
        x: number, 
        y: number 
    }>( { prevx: 0, prevy: 0, x: 0, y: 0 } )
    const [mouseDown, setMouseDown] = useState<boolean>( false )
    const canvasRef = useRef<HTMLCanvasElement | null>( null )

    useEffect(() => {
        if( !canvasRef.current ) return
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        //Our first draw
        if( !context ) return
        context.fillStyle = 'white'
        context.beginPath();
    
        context.lineWidth = 10
         
        // Sets the end of the lines drawn
        // to a round shape.
        context.lineCap = 'round';
        context.lineJoin = 'round';
          
        context.strokeStyle = 'white';
            
        // The cursor to start drawing
        // moves to this coordinate
        context.moveTo(coords.prevx, coords.prevy);
         !mouseDown && context.moveTo(coords.prevx, coords.prevy);
        // A line is traced from start
        // coordinate to this coordinate
        context.lineTo(coords.x, coords.y);
          
        // Draws the line.
        context.stroke();

      }, [ coords ])

    return <canvas 
            id="canvas"
            width={ window.innerWidth }
            height={ window.innerHeight }
            ref={ canvasRef }
            className={ styles.canvas }
            onMouseDown={ ( ) => setMouseDown( true ) }
            onMouseMove={ ( { pageX, pageY } ) => 
            mouseDown && 
            setCoords( 
                ( { x, y } ) => ({ 
                    // when x is zero set to mouse's current coords, 
                    // else get the previous ones
                    prevx: !x ? pageX : x,
                    prevy: !y ? pageY : y,
                    x: pageX, 
                    y: pageY 
                } ) 
            ) }
            onMouseUp={ ( { pageX, pageY } ) => { 
                setMouseDown( false ) 
                setCoords( { 
                        // when x is zero set to mouse's current coords, 
                        // else get the previous ones
                        prevx: pageX,
                        prevy: pageY,
                        x: pageX, 
                        y: pageY 
                    } ) 
            }}
        />
    }

export default Canvas