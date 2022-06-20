import { FC } from "react";
import { noteInputType } from "../../../../../interfaces/reduxInterfaces/Home/homeReduxInterfaces";
import ImageNoteInput from "../Images/ImageNoteInput";
import TextNote from '../write'

interface InputTypeProps extends noteInputType {}

const InputType: FC<InputTypeProps> 
= ( { content, type } ) => {

    return type === "image" ? <ImageNoteInput/> : <TextNote/>
}

export default InputType