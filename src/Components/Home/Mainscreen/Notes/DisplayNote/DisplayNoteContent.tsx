import { FC, useEffect, useState } from "react";
import { useData } from "../../../../../contexts/HomeContext";
import { useMutation } from "../../../../../hooks/graphql/useMutation";
import { default as Edit } from '../../../../../graphics/pencil.svg'
import { default as AddImage } from '../../../../../graphics/image.svg'
import { default as Selector } from '../../../../../graphics/selector.svg'
import { styles } from "./DisplayNoteStyles";
import SelectorIcon from "./SelectorIcon";
 
const CONTENT_MUTATION = `
mutation newContent( $content:String, $noteId:String ) {
    newContent(content:$content, noteId:$noteId) {
      content
      id
      noteId
    }
  }
`

interface DisplayNoteContentProps {
    content: string, 
    noteId: string
}

const DisplayNoteContent: FC<DisplayNoteContentProps> 
= ( { content, noteId } ) => {

    const [ { data, error, loading }, setNewNote ] = useMutation()
    const { id } = useData()

    const [ selected, setSelected ] = useState( '10%' )
    const arr = [
        { transform: '10%', Icon: Edit },
        { transform: '35%', Icon: AddImage },
    ]

    useEffect( () => {
        document.body.style.cssText = `
            --transform-paw: ${ selected }
        `
    }, [ selected ] )

    return (
        <div className={ styles.modal_content_wrap }>
            <div>
                { content }
                <div className={ styles.modal_selector }>
                    <SelectorIcon/>
                </div>
            </div>
            <div className={ styles.modal_content_actions }>
                {
                    arr.map( ( { Icon, transform } ) => (
                        <img 
                            src={ Icon } 
                            onClick={ () => setSelected( transform ) }
                        />
                    ) )
                }
            </div>
        </div>
    )
}

export default DisplayNoteContent