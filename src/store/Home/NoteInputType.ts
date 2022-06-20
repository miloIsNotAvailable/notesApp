import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { noteInputType } from "../../interfaces/reduxInterfaces/Home/homeReduxInterfaces";

const initialState: noteInputType = {
    content: null,
    type: "text"
}

const notTypeSlice = createSlice( {
    name: 'noteType', 
    initialState,
    reducers: {
        setNoteType: ( 
            state: noteInputType, 
            action: PayloadAction<noteInputType> 
            ) => {
                
                state.type = action.payload.type
                state.content = action.payload.content
            }
        }   
    } 
)

export const { setNoteType } = notTypeSlice.actions
export default notTypeSlice.reducer