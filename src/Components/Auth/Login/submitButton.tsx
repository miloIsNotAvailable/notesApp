import { FC } from "react";
import { CombinedState } from "redux";
import { formDataType, getFormDataState } from "../../../interfaces/reduxInterfaces/Auth/authReduxInterfaces";
import { setUserEmail } from "../../../store/Auth/getEmail";
import { setUserPassword } from "../../../store/Auth/getPassword";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { styles } from "./LoginStyles";

const SubmitButton: FC = () => {

    const selector = useAppSelector( 
        (state: { getFormData: CombinedState<{ getUserEmail: formDataType; getUserPassword: formDataType; }>; }) => state.getFormData
    )
    
    const handleSubmit = () => {
        console.log( selector )
    }

    return (
        <div className={ styles.submit_button }
        onClick={ handleSubmit }>
            <p>submit</p>
        </div>
    )
}

export default SubmitButton