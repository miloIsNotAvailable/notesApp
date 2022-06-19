import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { accountOpen } from "../../interfaces/reduxInterfaces/Home/homeReduxInterfaces";

const initialState: accountOpen = {
    open: false
}

const getAccoutnOpenSlice = createSlice( {
    name: 'accountOpen', 
    initialState,
    reducers: {
        setAccountOpen: ( 
            state: accountOpen, 
            action: PayloadAction<accountOpen> 
            ) => {
                
                state.open = action.payload.open
            }
        }   
    } 
)

export const { setAccountOpen } = getAccoutnOpenSlice.actions
export default getAccoutnOpenSlice.reducer