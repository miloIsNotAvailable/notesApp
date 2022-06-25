import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { Note } from "../../api/dbinterfaces";
import { useQuery } from "../hooks/graphql/useQuery";
import { useData } from "./HomeContext";

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

type notesType = { 
    data: any | undefined, 
    loading: boolean,
    error: string | undefined 
}

export const useNotesContext: 
() => [ notesType, Dispatch<SetStateAction<Note[]>> ] 
= () => {

    const [ newNotes, setNewNotes ] = useState<Note[]>( [] )
    const [ notes, setNotes ] = useState<notesType>( { data: undefined, error: undefined, loading: false } )
    const { id } = useData()
    
    const { data, loading, error } = useQuery( QUERY_USER_NOTES, {
        variables: {
            users: id
        }
    }  )
        
    useEffect( () => {
        if( loading || !id ) setNotes( { data: undefined, loading: true, error: undefined } )
        if( data ) setNotes( { data: data, loading: false, error: undefined } )
        if( error ) setNotes( { data: undefined, loading: false, error: error } )
    }, [ data, loading, error, id ] )


    // useEffect( () => {
    //     if( !notes?.data ) return
    //     setNotes( prev => ( { 
    //         data: [ ...prev?.data, ...newNotes ],
    //         error: undefined, 
    //         loading: false
    //      } ) )
    // }, [ newNotes ] )

    const NotesContext = createContext<any>( null )
    const NotesContextProvider = NotesContext.Provider

    return [ notes, setNewNotes ]
}