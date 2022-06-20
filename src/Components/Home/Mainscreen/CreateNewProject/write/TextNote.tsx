import { FC, FormEvent, MouseEventHandler } from "react";
import { useData } from "../../../../../contexts/HomeContext";
import { useNoteType } from "../../../../../hooks/home/useNoteType";
import { setNoteType } from "../../../../../store/Home/NoteInputType";
import { useAppDispatch } from "../../../../../store/hooks";
import { styles } from "./WriteStyles";

type argsType = MouseEventHandler<HTMLDivElement> | FormEvent<HTMLDivElement>

// check if event is an input event
const isOnInput = ( arg: argsType ): 
arg is FormEvent<HTMLDivElement> => {
    const v = arg as FormEvent<HTMLDivElement>
    return !!v.currentTarget.innerText
}

const TextNote: FC = () => {

    const dispatch = useAppDispatch()

    const getType: ( e: FormEvent<HTMLDivElement> ) => void 
    = ( e ) => {
        dispatch(setNoteType( { 
            content: isOnInput( e ) ? e.currentTarget.innerText : "",
            type: "text"
         } )  )
    }

    return <div 
        id="textnote"
        onClick={ getType }
        onInput={ getType }
        contentEditable
        className={ styles.write_input } 
        placeholder={ "create new note..." }
        style={ {

        } }
    />
}

export default TextNote