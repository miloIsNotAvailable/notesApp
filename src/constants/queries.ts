export const NOTE_MUTATION = `
    mutation createNote( $id:String, $title:String, $content:String, $type: String ){
        newNote( id:$id, content:$content, title:$title, type:$type ) {
            id
            title
            content
            type
        }
    }
`