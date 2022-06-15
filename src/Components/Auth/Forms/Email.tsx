import { FC, useEffect, useRef } from "react";
import { CombinedState } from "redux";
import { formDataType } from "../../../interfaces/reduxInterfaces/Auth/authReduxInterfaces";
import { setUserEmail } from "../../../store/Auth/getEmail";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import FormLayout from "./FormLayout";
import { styles } from "./FormStyles";

const Email: FC = () => {

    const inputRef = useRef<HTMLInputElement | null>( null )
    const dispatch = useAppDispatch()

    const selector = useAppSelector( 
        (state: { getFormData: CombinedState<{ getUserEmail: formDataType; getUserPassword: formDataType; }>; }) => state.getFormData
    )

    useEffect( () => {
        dispatch( setUserEmail( { 
            email: "",
            error: undefined, 
            password: "", 
            username: ""
         } ) )
    }, [] )

    const handleChange = () => {
        if( !inputRef.current ) return 

        dispatch( setUserEmail( { 
            email: inputRef.current.value,
            error: undefined, 
            password: "", 
            username: ""
         } ) )
    }

    return(
        <div>
            <FormLayout  
                inputRef={ inputRef }
                title="email" 
                type="email" 
                handleChange={ handleChange }
            />
            {
                selector.getUserEmail.error && 
                <div className={ styles.error_msg }>
                    { selector.getUserEmail.error }
                </div>
            }
        </div>
    )
}

export default Email