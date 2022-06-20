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