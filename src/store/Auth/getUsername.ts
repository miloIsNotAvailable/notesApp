import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { formDataType } from "../../interfaces/reduxInterfaces/Auth/authReduxInterfaces";
import { initialState } from './initialState'

const getUsernameSlice = createSlice( {
    name: 'usernameInfo', 
    initialState,
    reducers: {
        setUserUsername: ( 
            state: formDataType, 
            action: PayloadAction<formDataType> 
            ) => {
                
                const { username } = action.payload

                if( !username ) {
                    state.error = 'please enter username'
                    return 
                }

                state.username = action.payload.username
                state.error = undefined
            }
        }   
    } 
)

export const { setUserUsername } = getUsernameSlice.actions
export default getUsernameSlice.reducer