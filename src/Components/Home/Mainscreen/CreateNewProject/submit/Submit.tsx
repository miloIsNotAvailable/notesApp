import { FC } from "react";
import { useNoteType } from "../../../../../hooks/home/useNoteType";
import { setNoteType } from "../../../../../store/Home/NoteInputType";
import { useAppDispatch } from "../../../../../store/hooks";
import { styles } from "./SubmitStyles";

const Submit: FC = () => {

    const { content, type } = useNoteType()

    const dispatch = useAppDispatch()

    const handleClick: () => void = () => {
        console.log( content, type )
        
        // reset input on submit
        dispatch(setNoteType( { 
            content: null,
            type: type
         } )  )

        const textNote = document.getElementById( 'textnote' )
        if( textNote?.innerText ) textNote.innerText = ""
    }

    return (
        <div className={ styles.submit_button }
        onClick={ handleClick }>
            { '✔' }
        </div>
    )
}

export default Submit