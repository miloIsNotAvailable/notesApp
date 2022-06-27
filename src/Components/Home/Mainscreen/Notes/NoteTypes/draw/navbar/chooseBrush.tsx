import { FC, useState } from "react";
import { default as BrushIcon } from '../../.../../../../../../../graphics/brush.svg'
import { styles } from "../build/NoteCanvasStyles";
import { default as PencilIcon } from '../../.../../../../../../../graphics/pencil.svg'
import { default as Eraser } from '../../.../../../../../../../graphics/eraser.svg'
import { AnimatePresence, motion } from "framer-motion";

const ChooseBrush: FC = () => {

    const brushes = [
        { Icon: PencilIcon, type: 'pencil' },
        { Icon: Eraser, type: 'eraser' },
    ]

    const[ open, setOpen ] = useState<boolean>( false )
    const[ selected, setSelected ] = useState<string>( PencilIcon )

    return (
        <div className={ styles.choose_brush_wrap }>
            <img 
                className={ styles.choose_brush_icon }
                src={ selected } 
                alt=""
                onClick={() => setOpen( !open )}
            />
            <AnimatePresence>
                {
                    open && 
                    <motion.div 
                        className={ styles.choose_brush_menu }
                        initial={ { opacity: 0, transform: 'translate(0, 10%)' } }
                        animate={ { opacity: 1, transform: 'translate(0, 0%)' } }
                        exit={ { opacity: 0, transform: 'translate(0, 10%)' } }
                    >
                        {
                            brushes.map( ( { Icon, type } ) => (
                                <img
                                    className={ styles.brush_icon }
                                    src={ Icon } 
                                    alt=""
                                    onClick={ () => setSelected( Icon ) }
                                />
                            ) )
                        }
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export default ChooseBrush