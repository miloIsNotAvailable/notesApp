import { FC, useEffect, useRef } from "react";
import { CombinedState } from "redux";
import { formDataType } from "../../../interfaces/reduxInterfaces/Auth/authReduxInterfaces";
import { setUserEmail } from "../../../store/Auth/getEmail";
import { setUserPassword } from "../../../store/Auth/getPassword";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import FormLayout from "./FormLayout";
import { styles } from "./FormStyles";

const Password: FC = () => {

    const inputRef = useRef<HTMLInputElement | null>( null )
    const dispatch = useAppDispatch()
    
    const selector = useAppSelector( 
        (state: { getFormData: CombinedState<{ getUserEmail: formDataType; getUserPassword: formDataType; }>; }) => state.getFormData
    )

    useEffect( () => {
        dispatch( setUserPassword( { 
            email: "",
            error: undefined, 
            password: "", 
            username: ""
         } ) )
    }, [] )

    const handleChange = () => {
        if( !inputRef.current ) return 

        console.log( inputRef.current.value )

        dispatch( setUserPassword( { 
            email: "",
            error: undefined, 
            password: inputRef.current.value, 
            username: ""
         } ) )
    }

    return(
        <div>
            <FormLayout  
                inputRef={ inputRef }
                title="password" 
                type="password" 
                handleChange={ handleChange }
            />
            {
                selector.getUserPassword.error && 
                <div className={ styles.error_msg }>
                    { selector.getUserPassword.error }
                </div>
            }
        </div>
    )
}

export default Password