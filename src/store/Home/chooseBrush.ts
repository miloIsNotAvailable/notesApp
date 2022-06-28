import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { chooseBrushType } from "../../interfaces/reduxInterfaces/Home/homeReduxInterfaces";

const initialState: chooseBrushType = {
    brush: 'pencil'
}

const setBrushSlice = createSlice( {
    name: 'chooseBrush', 
    initialState,
    reducers: {
        setNewBrush: ( 
            state: chooseBrushType, 
            action: PayloadAction<chooseBrushType> 
            ) => {
                
                state.brush = action.payload.brush
            }
        }   
    } 
)

export const { setNewBrush } = setBrushSlice.actions
export default setBrushSlice.reducer