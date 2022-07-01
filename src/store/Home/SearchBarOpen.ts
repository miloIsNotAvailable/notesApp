import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchModalOpen } from "../../interfaces/reduxInterfaces/Home/homeReduxInterfaces";

const initialState: searchModalOpen = {
    open: false,
    x: 0,
    y: 0,
    noteId: ""
}

const setSeachModalOpenSlice = createSlice( {
    name: 'searchModalOpen', 
    initialState,
    reducers: {
        setSearchModalOpen: ( 
            state: searchModalOpen, 
            action: PayloadAction<searchModalOpen> 
            ) => {
                
                state.open = action.payload.open
                state.x = action.payload.x
                state.y = action.payload.y
                state.noteId = action.payload.noteId
            }
        }   
    } 
)

export const { setSearchModalOpen } = setSeachModalOpenSlice.actions
export default setSeachModalOpenSlice.reducer