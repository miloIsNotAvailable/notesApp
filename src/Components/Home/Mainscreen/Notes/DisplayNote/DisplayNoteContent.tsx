import { FC, KeyboardEvent, useEffect, useRef, useState } from "react";
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

    console.log( data )

    const [ editable, setEditable ] = useState<boolean>( false ) 
    
    const editContent: 
    ( e: KeyboardEvent<HTMLDivElement> ) => void = e => {

        if( e.key !== 'Enter' ) return
        setNewNote( CONTENT_MUTATION, {
            args: {
                noteId: noteId, 
                id: id,
                content: e.currentTarget.innerText
            }
        } )
        setEditable( false )
    }

    const [ selected, setSelected ] = useState( '0%' )
    const arr = [
        { transform: '0%', Icon: Edit },
        { transform: '3vw', Icon: AddImage },
    ]

    useEffect( () => {
        document.body.style.cssText = `
            --transform-paw: ${ selected }
        `
    }, [ selected ] )

    return (
        <div className={ styles.modal_content_wrap }>
            <div 
                className={ styles.modal_content }
                contentEditable={ editable }
                onBlur={ () => setEditable( false ) }
                onKeyDown={ editContent }>
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
                            onClick={ () => {
                                setSelected( transform )
                                setEditable( true )
                            } }
                        />
                    ) )
                }
            </div>
        </div>
    )
}

export default DisplayNoteContent