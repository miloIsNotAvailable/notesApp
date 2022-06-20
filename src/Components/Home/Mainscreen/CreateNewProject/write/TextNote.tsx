import { FC, FormEvent, MouseEventHandler } from "react";
import { setNoteType } from "../../../../../store/Home/NoteInputType";
import { useAppDispatch } from "../../../../../store/hooks";
import { styles } from "./WriteStyles";

type argsType = MouseEventHandler<HTMLDivElement> | FormEvent<HTMLDivElement>

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
        // onClick={ getType }
        onInput={ getType }
        contentEditable
        className={ styles.write_input } 
        placeholder={ "create new note..." }
        style={ {

        } }
    />
}

export default TextNote