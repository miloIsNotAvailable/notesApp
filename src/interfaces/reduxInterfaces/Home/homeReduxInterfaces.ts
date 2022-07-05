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
    type: string
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

export type searchModalOpen = {
    x: number
    y: number
    open: boolean
    noteId: string
}

export type setNewThemeType = {
    create: boolean
}

export type addNewNotesToThemeState = {
    add: boolean
}

export type getThemeIDType = {
    id: string
}

export type getThemeNameType = {
    title: string
}

export type newNoteState = {  getNewNotes: newNoteType }

export type getNoteModalState = {  getNoteModal: noteModalOpen }

export type setNewColorState = { getNewColor: chooseColorType }

export type setNewBrushState = { getNewBrush: chooseBrushType }

export type setSearchModalState = { getSearchModalOpen: searchModalOpen }

export type getNewThemeState = { getNewTheme: setNewThemeType }

export type getNewNotesToThemeState = { getNewNoteToTheme: addNewNotesToThemeState }

export type getThemeIDState = { getThemeID: getThemeIDType }

export type getThemeNameState = { getThemeName: getThemeNameType }