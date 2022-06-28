import { AnimatePresence, motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { setNewColor } from "../../../../../../../store/Home/chooseColor";
import { useAppDispatch } from "../../../../../../../store/hooks";
import { styles } from "../build/NoteCanvasStyles";

const ColorPicker: FC = () => {

    const [open, setOpen] = useState( false )
    const [selected, setSelected] = useState( 'white' )
    const colors = [
        "#FFAFAF",
        "#EAC43D",
        "#CBFFD0",
        "#C7F7FA",
        "#C7D5FA",
        "#FFCCAF",
        'white',
    ]


    const dispatch = useAppDispatch()

    useEffect( () => {
        dispatch( setNewColor( { color: selected } ) )
    }, [ selected ] )

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
                                        key={ n } 
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