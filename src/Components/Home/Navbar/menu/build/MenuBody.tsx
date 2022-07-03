import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import CreateNewTheme from "../Theme/CreateNewTheme";
import Themes from "../Theme/Themes";
import { styles } from "./MenuStyles";

interface MenuBodyProps {
    open: boolean
}

const MenuBody: FC<MenuBodyProps> = ( { open } ) => {

    return (
        <AnimatePresence>
            {
                open && 
                <motion.div 
                    className={ styles.menu_body_wrap }
                    initial={ { maxWidth: 0 } }
                    animate={ { maxWidth: "20%" } }
                    exit={ { maxWidth: 0 } }
                >
                    <Themes/>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default MenuBody