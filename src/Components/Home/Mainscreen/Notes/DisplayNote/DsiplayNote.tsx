import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { getNoteModalState, noteModalOpen } from "../../../../../interfaces/reduxInterfaces/Home/homeReduxInterfaces";
import { useAppSelector } from "../../../../../store/hooks";
import CloseModal from "./CloseModal";
import { styles } from "./DisplayNoteStyles";

const DisplayNote: FC = () => {

    const { content, id, open, title, users } = useAppSelector( 
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
                    <div className={ styles.modal_title }>
                        { title }
                    </div>
                    <div>
                        { content }
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default DisplayNote