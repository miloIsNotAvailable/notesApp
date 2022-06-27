import { FC, MouseEvent, useEffect, useRef, useState } from "react";
import { styles } from "../build/NoteCanvasStyles";

const Canvas: FC = () => {

    const [coords, setCoords] = useState<{ x: number, y: number }>( { x: 0, y: 0 } )
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
    
        context.lineWidth = coords.y * .1 * Math.sin( Math.random() * Math.PI * 2 );
         
        // Sets the end of the lines drawn
        // to a round shape.
        context.lineCap = 'round';
          
        context.strokeStyle = 'white';
            
        // The cursor to start drawing
        // moves to this coordinate
        context.moveTo(coords.x, coords.y);
         
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
            onMouseMove={ ( { pageX, pageY } ) => mouseDown && setCoords( { x: pageX, y: pageY } ) }
            onMouseUp={ ( ) => setMouseDown( false ) }
        />
    }

export default Canvas