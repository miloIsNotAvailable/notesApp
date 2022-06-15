import { FC, HTMLInputTypeAttribute } from "react";
import { styles } from "./FormStyles";

type titleTypes = "email" | "username" | "password"
type typeTypes = titleTypes extends "username" ? never : titleTypes

interface FormLayoutProps {
    title: titleTypes
    type: typeTypes
}

const FormLayout: FC<FormLayoutProps> 
= ( { title, type } ) => {

    return (
        <div className={ styles.form_layout_wrap }>
            <input 
                type={ type } 
                placeholder={ title }
                className={ styles.form_layout_input }
                key={ title }
            />
        </div>
    )
}

export default FormLayout