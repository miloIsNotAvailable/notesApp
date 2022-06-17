import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CombinedState } from "redux";
import { useLazyFetch } from "../../../hooks/queries/useLazyFetch";
import { formDataType, getFormDataState } from "../../../interfaces/reduxInterfaces/Auth/authReduxInterfaces";
import { setLoadingData } from "../../../store/Auth/checkforLoading";
import { setUserEmail } from "../../../store/Auth/getEmail";
import { setUserPassword } from "../../../store/Auth/getPassword";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { styles } from "./RegisterStyles";

const SubmitButton: FC = () => {

    const selector = useAppSelector( 
        (state: { getFormData: CombinedState<{ 
            getUserEmail: formDataType; 
            getUserPassword: formDataType; 
            getUserUsername: formDataType; 
        }>; }) => state.getFormData
    )
    
    const dispatch = useAppDispatch()

    const [ { data, loading, error }, setQueryResult ] = useLazyFetch<string>()
    const navigate = useNavigate()

    useEffect( () => {
        if( data ) console.log( data )
        // check if data is being fetched
        // for the loading animation
        dispatch( 
            setLoadingData( { loading } ) 
        )
    } )

    const handleSubmit = () => {
        if(
            selector.getUserEmail.error || 
            selector.getUserPassword.error ||
            selector.getUserUsername.error
        ) return

        setQueryResult( 'http://localhost:4000/create_user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },          
            body: JSON.stringify( selector )
        } )

        if( !data?.error ) setTimeout( () => {
            navigate( '/home' )
        }, 1000 )
    }

    return (
        <div className={ styles.submit_button }
        onClick={ handleSubmit }>
            <p>{ loading ? 'submitting..' : 'submit' }</p>
        </div>
    )
}

export default SubmitButton