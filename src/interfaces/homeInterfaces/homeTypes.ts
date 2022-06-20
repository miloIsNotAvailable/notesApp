export type userDataType = {
    email: string, 
    username: string, 
    id: string
    iat: string
}

export interface NoteTypeInterface {
    onClick: () => void
    selected: string
}