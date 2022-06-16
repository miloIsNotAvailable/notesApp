import { motion, AnimatePresence } from "framer-motion";
import { FC } from "react";
import { default as BgImg } from '../../../graphics/loading.svg'
import { getSetLoadingState } from "../../../interfaces/reduxInterfaces/Auth/authReduxInterfaces";
import { useAppSelector } from "../../../store/hooks";
import Bg from "./Bg";
import { styles } from "./FormStyles";

const Loading: FC = () => {

    const isLoading = useAppSelector( 
        ( state: getSetLoadingState )  => state.checkForDataLoading.loading
    )

    return (
        <AnimatePresence>
            {
                isLoading && 
                <motion.div 
                    className={ styles.wrap_loading }
                    initial={ { left: '50%', width: '50%' } }
                    animate={ { left: '0%', width: '100%' } }
                    exit={ { left: '50%', width: '50%' } }
                >
                    <Bg/>
                </motion.div>
            }
        </AnimatePresence>
    )
    
}

export default Loading