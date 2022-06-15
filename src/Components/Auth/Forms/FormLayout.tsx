import { FC, HTMLInputTypeAttribute, MutableRefObject } from "react";
import { styles } from "./FormStyles";

type titleTypes = "email" | "username" | "password"
type typeTypes = titleTypes extends "username" ? never : titleTypes

interface FormLayoutProps {
    title: titleTypes
    type: typeTypes
    inputRef: MutableRefObject<HTMLInputElement | null>
    handleChange: () => void
}

const FormLayout: FC<FormLayoutProps> 
= ( { title, type, inputRef, handleChange } ) => {

    return (
        <div className={ styles.form_layout_wrap }>
            <input 
                ref={ inputRef }
                type={ type } 
                placeholder={ title }
                className={ styles.form_layout_input }
                key={ title }
                onChange={ handleChange }
            />
        </div>
    )
}

export default FormLayout