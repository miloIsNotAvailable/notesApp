export const NOTE_MUTATION = `
    mutation createNote( $userId:String, $title:String, $content:String, $type: String ){
        newNote( userId:$userId, content:$content, title:$title, type:$type ) {
            userId
            title
            content
            type
        }
    }
`