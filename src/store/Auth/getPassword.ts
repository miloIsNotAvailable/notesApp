import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { formDataType } from "../../interfaces/reduxInterfaces/Auth/authReduxInterfaces";
import { initialState } from './initialState'

const getPasswordInfoSlice = createSlice( {
    name: 'emailInfo', 
    initialState,
    reducers: {
        setUserPassword: ( 
            state: formDataType, 
            action: PayloadAction<formDataType> 
            ) => {
                
                const { password } = action.payload

                if( !password ) {
                    state.error = 'please enter password'
                    return 
                }
                
                if( password.length < 3 ) {
                    state.error = 'password must have at least 3 letters'
                    return 
                }

                if( !password.match( /[0-9]/ ) ) {
                    state.error = 'password must contain at least 1 digit' 
                    return
                }

                state.password = action.payload.password
                state.error = undefined
            }
        }   
    } 
)

export const { setUserPassword } = getPasswordInfoSlice.actions
export default getPasswordInfoSlice.reducer