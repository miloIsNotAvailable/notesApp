export const NOTE_MUTATION = `
    mutation createNote( $userId:String, $title:String, $content:String, $type: String, $id: String ){
        newNote( userId:$userId, content:$content, title:$title, type:$type, id: $id ) {
            userId
            title
            content
            type
            id
        }
    }
`