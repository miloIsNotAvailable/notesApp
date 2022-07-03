import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addNewNotesToThemeState } from "../../interfaces/reduxInterfaces/Home/homeReduxInterfaces";

const initialState: addNewNotesToThemeState = {
    add: false
}

const addNotesToTheme = createSlice( {
    name: 'newThemeNotes', 
    initialState,
    reducers: {
        setNewNotesToTheme: ( 
            state: addNewNotesToThemeState, 
            action: PayloadAction<addNewNotesToThemeState> 
            ) => {
                state.add = action.payload.add
            }
        }   
    } 
)

export const { setNewNotesToTheme } = addNotesToTheme.actions
export default addNotesToTheme.reducer