import { FC, useEffect } from "react";
import { CombinedState } from "redux";
import { useLazyFetch } from "../../../hooks/queries/useLazyFetch";
import { formDataType, getFormDataState } from "../../../interfaces/reduxInterfaces/Auth/authReduxInterfaces";
import { setUserEmail } from "../../../store/Auth/getEmail";
import { setUserPassword } from "../../../store/Auth/getPassword";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { styles } from "./RegisterStyles";

const SubmitButton: FC = () => {

    const selector = useAppSelector( 
        (state: { getFormData: CombinedState<{ getUserEmail: formDataType; getUserPassword: formDataType; }>; }) => state.getFormData
    )
    
    const [ { data, loading, error }, setQueryResult ] = useLazyFetch<string>()

    useEffect( () => {
        if( data ) console.log( data )

        if( data?.data.length ) console.log( selector )
    } )

    const handleSubmit = () => {
        if(
            selector.getUserEmail.error || 
            selector.getUserPassword.error
        ) return

        setQueryResult( 'http://localhost:4000/find_user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },          
            body: JSON.stringify( selector )
        } )
    }

    return (
        <div className={ styles.submit_button }
        onClick={ handleSubmit }>
            <p>submit</p>
        </div>
    )
}

export default SubmitButton