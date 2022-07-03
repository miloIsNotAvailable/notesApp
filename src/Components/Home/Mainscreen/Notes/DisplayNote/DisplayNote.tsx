import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { getNoteModalState, noteModalOpen } from "../../../../../interfaces/reduxInterfaces/Home/homeReduxInterfaces";
import { useAppSelector } from "../../../../../store/hooks";
import CloseModal from "./CloseModal";
import DisplayNoteContent from "./DisplayNoteContent";
import { styles } from "./DisplayNoteStyles";
import ModalNoteTitle from "./DisplayNoteTitle";

const DisplayNote: FC = () => {

    const { content, id, open, title, type } = useAppSelector( 
        ( state: getNoteModalState ) => state.getNoteModal 
    )

    return (

        <AnimatePresence exitBeforeEnter>
            {
                open && 
                <motion.div className={ styles.modal_wrap }
                    initial={ { opacity: 0, transform: 'translate(-50%, -10%)' } }
                    animate={ { opacity: 1, transform: 'translate(-50%, -50%)' } }
                    exit={ { opacity: 0, transform: 'translate(-50%, -10%)' } }
                >
                    <CloseModal/>
                    <ModalNoteTitle 
                        title={ title } 
                        noteId={ id } 
                    />
                    <DisplayNoteContent 
                        type={ type } 
                        content={ content } 
                        noteId={ id } 
                    />
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default DisplayNote