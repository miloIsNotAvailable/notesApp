import { FC, useEffect, useRef } from "react";
import { CombinedState } from "redux";
import { formDataType } from "../../../interfaces/reduxInterfaces/Auth/authReduxInterfaces";
import { setUserEmail } from "../../../store/Auth/getEmail";
import { setUserPassword } from "../../../store/Auth/getPassword";
import { setUserUsername } from "../../../store/Auth/getUsername";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import FormLayout from "./FormLayout";
import { styles } from "./FormStyles";

const Username: FC = () => {

    const inputRef = useRef<HTMLInputElement | null>( null )
    const dispatch = useAppDispatch()
    
    const selector = useAppSelector( 
        (state: { getFormData: CombinedState<{ 
            getUserEmail: formDataType; 
            getUserPassword: formDataType; 
            getUserUsername: formDataType;
        }>; }) => state.getFormData
    )

    useEffect( () => {
        dispatch( setUserUsername( { 
            email: "",
            error: undefined, 
            password: "", 
            username: ""
         } ) )
    }, [] )

    const handleChange = () => {
        if( !inputRef.current ) return 

        console.log( inputRef.current.value )

        dispatch( setUserUsername( { 
            email: "",
            error: undefined, 
            password: "", 
            username: inputRef.current.value
         } ) )
    }

    return(
        <div>
            <FormLayout  
                inputRef={ inputRef }
                title="username" 
                type="username" 
                handleChange={ handleChange }
            />
            {
                selector.getUserUsername.error && 
                <div className={ styles.error_msg }>
                    { selector.getUserUsername?.error }
                </div>
            }
        </div>
    )
}

export default Username