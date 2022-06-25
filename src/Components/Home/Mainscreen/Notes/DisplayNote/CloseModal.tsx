import { FC } from "react";
import { setNoteModalOpen } from "../../../../../store/Home/noteModalOpen";
import { useAppDispatch } from "../../../../../store/hooks";
import { styles } from "./DisplayNoteStyles";

const CloseModal: FC = () => {

    const dispatch = useAppDispatch()

    const handleCloseModal: () => void = () => {
        dispatch( setNoteModalOpen( {
            open: false,
            content: "",
            title: "",
            id: "",
            users: ""
        } ) ) 
    }

    return (
        <div className={ styles.modal_close }
        onClick={ handleCloseModal }>
            <p>+</p>
        </div>
    )
}

export default CloseModal