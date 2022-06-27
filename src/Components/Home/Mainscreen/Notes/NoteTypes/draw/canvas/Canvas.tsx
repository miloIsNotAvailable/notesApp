import { FC } from "react";
import { styles } from "../build/NoteCanvasStyles";

const Canvas: FC = () => {

    return <canvas id="canvas" className={ styles.canvas }/>
    }

export default Canvas