import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { getNewThemeState } from "../../../../../interfaces/reduxInterfaces/Home/homeReduxInterfaces";
import { useAppSelector } from "../../../../../store/hooks";
import NewThemeInput from "./NewThemeInput";

const UserThemes: FC = () => {

    // determine whether user clicked 
    // on create new note
    const selector = useAppSelector(
        ( state: getNewThemeState ) => state.getNewTheme.create
    )

    return (
        <div>
            <AnimatePresence>
                {
                    selector &&
                    <motion.div
                        initial={ { opacity: 0, transform: 'translate(100%, 0)' } }
                        animate={ { opacity: 1, transform: 'translate(0%, 0)' } }
                        exit={ { opacity: 0, transform: 'translate(-100%, 0)' } }
                    >
                        <NewThemeInput/>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export default UserThemes