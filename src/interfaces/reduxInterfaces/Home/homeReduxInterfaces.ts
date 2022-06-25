import { Note } from "../../../../api/dbinterfaces"

export type accountOpen = {
    open: boolean
}

export type noteInputType = {
    type: string
    content: string | null
}

export type noteInputState = {
    getNoteType: noteInputType
}

export type newNoteType = {
    newNotes: any,
    notesLoading: number,
    loading: boolean
}

export type newNoteState = {  getNewNotes: newNoteType }