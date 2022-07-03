import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setNewThemeType } from "../../interfaces/reduxInterfaces/Home/homeReduxInterfaces";

const initialState: setNewThemeType = {
    create: false
}

const createNewThemeSlice = createSlice( {
    name: 'newTheme', 
    initialState,
    reducers: {
        setNewTheme: ( 
            state: setNewThemeType, 
            action: PayloadAction<setNewThemeType> 
            ) => {
                state.create = action.payload.create
            }
        }   
    } 
)

export const { setNewTheme } = createNewThemeSlice.actions
export default createNewThemeSlice.reducer