import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { newNoteType } from "../../interfaces/reduxInterfaces/Home/homeReduxInterfaces";

const initialState: newNoteType = {
    newNotes: [],
    loading: false,
    notesLoading: 0
}

const setNewNoteSlice = createSlice( {
    name: 'newNotes', 
    initialState,
    reducers: {
        setNewNote: ( 
            state: newNoteType, 
            action: PayloadAction<newNoteType> 
            ) => {
                
                action.payload.newNotes && state.newNotes.push( action.payload.newNotes )
                state.loading = action.payload.loading
                state.notesLoading = action.payload.notesLoading
            }
        }   
    } 
)

export const { setNewNote } = setNewNoteSlice.actions
export default setNewNoteSlice.reducer