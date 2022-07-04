import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getThemeIDType } from "../../interfaces/reduxInterfaces/Home/homeReduxInterfaces";

const initialState: getThemeIDType = {
    id: ''
}

const getThemeIDSlice = createSlice( {
    name: 'themeID', 
    initialState,
    reducers: {
        setThemeID: ( 
            state: getThemeIDType, 
            action: PayloadAction<getThemeIDType> 
            ) => {
                state.id = action.payload.id
            }
        }   
    } 
)

export const { setThemeID } = getThemeIDSlice.actions
export default getThemeIDSlice.reducer