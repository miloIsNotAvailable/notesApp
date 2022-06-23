import { FC } from "react";
import { useData } from "../../../../../contexts/HomeContext";
import Loading from "../NoteTypes/build/Loading";
import NoteTypes from "../NoteTypes/build/NoteTypes";
import { styles } from "./NoteStyles";

const Notes: FC = () => {

    const { id } = useData()

    return (
        <div className={ styles.notes_wrap }>
            { !id ? <Loading/> : <NoteTypes id={ id } /> }
            {/* <NoteTypes/> */}
        </div>
    )
}

export default Notes