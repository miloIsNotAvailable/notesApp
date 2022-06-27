import { FC } from "react"; 
import Canvas from "../canvas/Canvas";
import NoteNavbar from "../navbar/NoteNavbar";
import { styles } from "./NoteCanvasStyles";

const NoteCanvas: FC = () => {

    return (
        <div className={ styles.note_canvas }>
            <NoteNavbar/>
            <Canvas/>
        </div>
    )
}

export default NoteCanvas