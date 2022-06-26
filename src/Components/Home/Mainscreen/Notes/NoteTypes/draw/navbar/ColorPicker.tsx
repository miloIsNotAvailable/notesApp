import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";
import { styles } from "../build/NoteCanvasStyles";

const ColorPicker: FC = () => {

    const [open, setOpen] = useState( false )
    const [selected, setSelected] = useState( 'white' )
    const colors = [
        'var(--red)',
        'var(--purple)',
        'var(--yellow)',
        'var(--orange)',
        'var(--blue)',
        'var(--green)',
        'white',
    ]

    return (
        <div className={ styles.wrap_color_picker }>
            <div 
                className={ styles.note_color_picker }
                onClick={ () => setOpen( !open ) }
                style={ { backgroundColor: selected } }
            />
            <AnimatePresence>
                    {
                    open &&
                        <motion.div className={ styles.note_colors_wrap }
                            initial={ { opacity: 0, transform: 'translate(0, 10%)' } }
                            animate={ { opacity: 1, transform: 'translate(0, 0%)' } }
                            exit={ { opacity: 0, transform: 'translate(0, 10%)' } }
                        >
                            {
                                colors.map( n => (
                                    <div
                                        onClick={ () => setSelected( n ) }
                                        className={ styles.note_colors }
                                        style={ { backgroundColor: n } }
                                    />
                                ) )
                            }
                        </motion.div>
                    }                
            </AnimatePresence>
        </div>
    )
}

export default ColorPicker