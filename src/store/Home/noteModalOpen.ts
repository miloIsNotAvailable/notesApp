import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { noteModalOpen } from "../../interfaces/reduxInterfaces/Home/homeReduxInterfaces";

const initialState: noteModalOpen = {
    open: false,
    content: "",
    id: "",
    title: "",
    users: ''
}

const getNoteModalSlice = createSlice( {
    name: 'noteModalOpen', 
    initialState,
    reducers: {
        setNoteModalOpen: ( 
            state: noteModalOpen, 
            action: PayloadAction<noteModalOpen> 
            ) => {
                
                state.open = action.payload.open
                state.content = action.payload.content
                state.users = action.payload.users
                state.id = action.payload.id
                state.title = action.payload.title
            }
        }   
    } 
)

export const { setNoteModalOpen } = getNoteModalSlice.actions
export default getNoteModalSlice.reducer