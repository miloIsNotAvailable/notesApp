import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { chooseColorType } from "../../interfaces/reduxInterfaces/Home/homeReduxInterfaces";

const initialState: chooseColorType = {
    color: 'white'
}

const setColorSlice = createSlice( {
    name: 'chooseColor', 
    initialState,
    reducers: {
        setNewColor: ( 
            state: chooseColorType, 
            action: PayloadAction<chooseColorType> 
            ) => {
                
                state.color = action.payload.color
            }
        }   
    } 
)

export const { setNewColor } = setColorSlice.actions
export default setColorSlice.reducer