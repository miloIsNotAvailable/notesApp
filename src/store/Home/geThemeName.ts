import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getThemeNameType } from "../../interfaces/reduxInterfaces/Home/homeReduxInterfaces";

const initialState: getThemeNameType = {
    title: ''
}

const getThemeNameSlice = createSlice( {
    name: 'themeName', 
    initialState,
    reducers: {
        setThemeName: ( 
            state: getThemeNameType, 
            action: PayloadAction<getThemeNameType> 
            ) => {
                state.title = action.payload.title
            }
        }   
    } 
)

export const { setThemeName } = getThemeNameSlice.actions
export default getThemeNameSlice.reducer