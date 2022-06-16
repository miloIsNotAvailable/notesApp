import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { formDataType } from "../../interfaces/reduxInterfaces/Auth/authReduxInterfaces";
import { initialState } from './initialState'

const getEmailInfoSlice = createSlice( {
    name: 'emailInfo', 
    initialState,
    reducers: {
        setUserEmail: ( 
            state: formDataType, 
            action: PayloadAction<formDataType> 
            ) => {
                
                const validateEmail = action.payload.email.match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ )

                if( !validateEmail ) {
                    state.error = "please enter email" 
                    state.email = ""                    
                    return 
                } 

                state.email = action.payload.email
                state.error = undefined

            }
        }   
    } 
)

export const { setUserEmail } = getEmailInfoSlice.actions
export default getEmailInfoSlice.reducer