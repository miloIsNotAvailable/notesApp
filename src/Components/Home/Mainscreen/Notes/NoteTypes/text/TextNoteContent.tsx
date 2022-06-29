import { FC } from "react";
import { setNoteModalOpen } from "../../../../../../store/Home/noteModalOpen";
import { useAppDispatch } from "../../../../../../store/hooks";

interface TextNoteContentProps {
    content: string
    title: string
    noteId: string
}

const TextNoteContent: FC<TextNoteContentProps> 
= ( { content="", title, noteId } ) => {

    const dispatch = useAppDispatch()

    const handleOpenModal: () => void = () => {
        dispatch( setNoteModalOpen( {
            open: true,
            content: content,
            title: title,
            id: noteId!,
            users: ""
        } ) ) 
    }

    return (
        <div>
            <p onClick={ handleOpenModal }>
                { content }
            </p>
        </div>
    )
}

export default TextNoteContent