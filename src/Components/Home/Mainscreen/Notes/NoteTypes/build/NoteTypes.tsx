import { FC, useState, useEffect, useRef } from "react";
import { useQuery } from "../../../../../../hooks/graphql/useQuery";
import TextNoteLayout from "../text/TextNoteLayout";
import { styles } from "./NoteTypesStyles";
import { Note } from '../../../../../../../api/dbinterfaces'
import { AnimatePresence, motion } from "framer-motion";
import { useAppSelector } from "../../../../../../store/hooks";
import { newNoteState } from "../../../../../../interfaces/reduxInterfaces/Home/homeReduxInterfaces";
import { useGetAllPostsQuery, useGetNewPostsMutation } from "../../../../../../store/apis/getPosts";
import TextNoteAddUsers from "../text/TextNoteAddUser";

const QUERY_USER_NOTES_WITH_USERS = `
query Notes( $users: String ) {
    queryNotes( users:$users ){
          id
      title
      content
      type
      users
      noteUsers {
        id
        users
      }
    }
  }
`

interface NoteTypesProps {
    id: string
}

const NoteTypes: FC<NoteTypesProps> = ( { id } ) => {

    // const { data, loading, error } = useQuery( QUERY_USER_NOTES, {
    //     variables: {
    //         users: id
    //     }
    // }  )
    const selector = useAppSelector( ( state: newNoteState ) => state.getNewNotes )

    const  { data, isLoading } = useGetAllPostsQuery( {
        body: QUERY_USER_NOTES_WITH_USERS, 
        variables: { users: id }
    })

    const [setCreateNewNote, createNewNote] = 
    useGetNewPostsMutation( {
        fixedCacheKey: 'get-new-note'
    } )
    const newNoteRef = useRef<any[]>( [] )

    // whuh huh, how it work
    // useEffect( () => {
        
    //         if( createNewNote?.data?.newNote ) newNoteRef.current = [ 
    //         ...newNoteRef.current, 
    //         createNewNote?.data?.newNote ]

    // }, [ createNewNote?.data?.newNote ] )  

    console.log( createNewNote?.data )

    if( isLoading ) return (
        <div className={ styles.note_types_align }>
        <AnimatePresence exitBeforeEnter>
            {
                Array(5).fill( { content: "" } ).map(
                    ( v: any, ind: number ) => (
                        <motion.div 
                            key={ ( ind + 1 )* 10 }
                            transition={ { delay: ind * .1 } }
                            initial={ { opacity: 0, transform: 'translate(0, -100%)' } }
                            animate={ { opacity: 1, transform: 'translate(0, 0%)', maxWidth: 'fit-content' } }
                            exit={ { opacity: 0, transform: 'translate(0, 100%)' } }
                        >
                            <TextNoteLayout 
                                loading={ isLoading }
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
            <TextNoteAddUsers />
            <AnimatePresence exitBeforeEnter>
                {
                    data?.queryNotes && [...data?.queryNotes, ...newNoteRef.current ].map(
                        ( v: any, ind: number ) => (
                            <motion.div 
                                key={ ind }
                                // transition={ { delay: ind * .05 } }
                                initial={ { opacity: 0, transform: 'translate(0, -100%)' } }
                                animate={ { 
                                    opacity: 1, 
                                    transform: `translate(0, 0%)`, 
                                    maxWidth: 'clamp(45ch, 50%, 100%)', 
                                    flexGrow: '1' } }
                                exit={ { opacity: 0, transform: 'translate(0, 100%)' } }
                            >
                                <TextNoteLayout
                                    {  ...v }
                                    noteId={ v?.id }
                                    loading={ !v?.content }
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