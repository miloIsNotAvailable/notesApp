import { Note } from "../../../../api/dbinterfaces"

export type accountOpen = {
    open: boolean
}

export type noteModalOpen = {
    open: boolean
    content: string,
    title: string 
    id: string 
    users: string
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

export type chooseColorType = {
    color: string
}

export type chooseBrushType = {
    brush: string
}

export type newNoteState = {  getNewNotes: newNoteType }

export type getNoteModalState = {  getNoteModal: noteModalOpen }

export type setNewColorState = { getNewColor: chooseColorType }

export type setNewBrushState = { getNewBrush: chooseBrushType }