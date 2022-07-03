import { FC, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { NOTE_MUTATION } from "../../../../../../../constants/queries";
import { useData } from "../../../../../../../contexts/HomeContext";
import { useGetNewPostsMutation } from "../../../../../../../store/apis/getPosts";
import { styles } from "../build/NoteCanvasStyles";

const SaveButton: FC = () => {

    // get the id passed in dynamic route
    const { id: paramId } = useParams()
    const { id } = useData()

    const [setCreateNewNote, createNewNote] = useGetNewPostsMutation( {
        fixedCacheKey: 'get-new-note',
    } )

    const handleSave: () => void = () => {
        const doc = document.getElementById( 'canvas' ) as HTMLCanvasElement
        console.log( doc.toDataURL( 'image/png' ) )

        const content = doc.toDataURL( 'image/png' )
        // console.log( content )

        content && setCreateNewNote( {
            body: NOTE_MUTATION,
            variables: {
                content,
                type: 'draw', 
                title: 'hey',
                userId: id,
                id: paramId
            }
        } )
    }

    return (
        <div className={ styles.save_note }
            onClick={ handleSave }>
            save
        </div>
    )
}

export default SaveButton