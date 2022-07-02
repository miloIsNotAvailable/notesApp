import { MutableRefObject } from "react"

export const draw: 
( 
    args: {
        context: CanvasRenderingContext2D | null,
        mouseDown: boolean, 
        selector: string,
        coords: { 
            prevx: number, 
            prevy: number, 
            x: number, 
            y: number 
        }
        brush: string,
    }
) => void 
= ( { 
    context, 
    coords, 
    mouseDown, 
    selector,
    brush
} ) => {

        //Our first draw
        if( !context ) return
        context.fillStyle = 'white'
    
        brush === 'pencil' ? 
        context.globalCompositeOperation="source-over" 
        : 
        context.globalCompositeOperation="destination-out"
        
        context.beginPath();
    
        context.lineWidth = brush === 'pencil' ? 5 : 20
         
        // Sets the end of the lines drawn
        // to a round shape.
        context.lineCap = 'round';
        context.lineJoin = 'round';
          
        context.strokeStyle = selector;
            
        // The cursor to start drawing
        // moves to this coordinate
        context.moveTo(coords.prevx, coords.prevy);

        // A line is traced from start
        // coordinate to this coordinate
        context.lineTo(coords.x, coords.y);
          
        // Draws the line.
        context.stroke();
        context.closePath();
}

const useDraw: 
( context: CanvasRenderingContext2D | null ) => any 
= context => {
    
    

}