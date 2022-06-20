import { FC, useState } from "react";
import { setNoteType } from "../../../../../store/Home/NoteInputType";
import { useAppDispatch } from "../../../../../store/hooks";
import NoteDraw from "../draw/NoteDraw";
import NoteImage from "../Images/NoteImage";
import TextNoteIcon from "../write/TextNoteIcon";

const ChooseNoteType: FC = () => {

    const [ selected, setSelected ] = useState( 'text' )

    const dispatch = useAppDispatch()

    const handleSelected: ( type: string ) => 
    void = ( type ) => {
        setSelected( type )
        dispatch(setNoteType( { 
            content: '',
            type: type
         } )  )
    }

    return (
        <>
            <TextNoteIcon 
                onClick={ () => handleSelected( 'text' ) } 
                selected={ selected }
            />
            <NoteImage 
                onClick={ () => handleSelected( 'image' ) } 
                selected={ selected }
            />
            <NoteDraw />
        </>
    )
}

export default ChooseNoteType