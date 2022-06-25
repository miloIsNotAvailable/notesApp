import { FC, useEffect } from "react";
import { useQuery } from "../../../../../../hooks/graphql/useQuery";
import TextNoteLayout from "../text/TextNoteLayout";
import { styles } from "./NoteTypesStyles";
import { Note } from '../../../../../../../api/dbinterfaces'
import { AnimatePresence, motion } from "framer-motion";
import { useNotesContext } from "../../../../../../contexts/NotesContext";
import { useAppSelector } from "../../../../../../store/hooks";
import { newNoteState } from "../../../../../../interfaces/reduxInterfaces/Home/homeReduxInterfaces";

const QUERY_USER_NOTES = `
query note( $users: String ) {
    note( users:$users ){
      users
      title
      content
      type
      id
    }
  }
`

interface NoteTypesProps {
    id: string
}

const NoteTypes: FC<NoteTypesProps> = ( { id } ) => {

    const { data, loading, error } = useQuery( QUERY_USER_NOTES, {
        variables: {
            users: id
        }
    }  )
    const selector = useAppSelector( ( state: newNoteState ) => state.getNewNotes )
    console.log( selector )

    console.log( 'its loading ' + loading )

    if( loading ) return (
        <div className={ styles.note_types_align }>
        <AnimatePresence exitBeforeEnter>
            {
                Array(5).fill( { content: "" } ).map(
                    ( { content }: Note, ind: number ) => (
                        <motion.div 
                            key={ ( ind + 1 )* 10 }
                            transition={ { delay: ind * .1 } }
                            initial={ { opacity: 0, transform: 'translate(0, -100%)' } }
                            animate={ { opacity: 1, transform: 'translate(0, 0%)', maxWidth: 'fit-content' } }
                            exit={ { opacity: 0, transform: 'translate(0, 100%)' } }
                        >
                            <TextNoteLayout 
                                title={ '' }
                                text={  `` } 
                                key={ `${(ind + 1) * 10}` }  
                                loading={ loading }
                                noteId={ ind.toString() }
                            />
                        </motion.div>
                    )
                )
            }
        </AnimatePresence>
    </div> 
    )

    return (
        <div className={ styles.note_types_align }>
            <AnimatePresence exitBeforeEnter>
                {
                    data?.data?.note && [...data?.data?.note, ...selector?.newNotes].map(
                        ( { content, title, id }: Note, ind: number ) => (
                            <motion.div 
                                key={ ind }
                                transition={ { delay: ind * .1 } }
                                initial={ { opacity: 0, transform: 'translate(0, -100%)' } }
                                animate={ { opacity: 1, transform: 'translate(0, 0%)' } }
                                exit={ { opacity: 0, transform: 'translate(0, 100%)' } }
                            >
                                <TextNoteLayout
                                    title={ title } 
                                    text={  content } 
                                    loading={ loading }
                                    noteId={ id }
                                />
                            </motion.div>
                        )
                    )
                }
            </AnimatePresence>
        </div>
    )
}

export default NoteTypes