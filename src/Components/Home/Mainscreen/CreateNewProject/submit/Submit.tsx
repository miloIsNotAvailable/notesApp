import { FC, useEffect } from "react";
import { NOTE_MUTATION } from "../../../../../constants/queries";
import { useData } from "../../../../../contexts/HomeContext";
import { useMutation } from "../../../../../hooks/graphql/useMutation";
import { useNoteType } from "../../../../../hooks/home/useNoteType";
import { setNoteType } from "../../../../../store/Home/NoteInputType";
import { useAppDispatch } from "../../../../../store/hooks";
import { styles } from "./SubmitStyles";

const Submit: FC = () => {

    const { 
        content, 
        type 
    } = useNoteType()

    const { id } = useData()

    const dispatch = useAppDispatch()
    const [ { data, loading, error }, setNote ] = useMutation()

    useEffect( () =>{
        console.log( data, loading )
    }, [ data, loading ] )

    const handleClick: () => void = () => {

        content && content?.length < 255 && 
        setNote(
            NOTE_MUTATION, 
            {
                args: {
                    content,
                    title: 'hey',
                    type,
                    userId: id
                }
            }
        )

        // reset input on submit
        dispatch(setNoteType( { 
            content: null,
            type: type
         } )  )

        const textNote = document.getElementById( 'textnote' )
        if( textNote?.innerText ) textNote.innerText = ""
    }

    if( !content?.trim() ) return <div/>

    return (
        <div className={ styles.submit_button }
        onClick={ handleClick }>
            { '✔' }
        </div>
    )
}

export default Submit