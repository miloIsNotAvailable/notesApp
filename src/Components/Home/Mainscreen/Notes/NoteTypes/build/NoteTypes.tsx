import { FC, useEffect } from "react";
import { useQuery } from "../../../../../../hooks/graphql/useQuery";
import TextNoteLayout from "../text/TextNoteLayout";
import Loading from "./Loading";
import { styles } from "./NoteTypesStyles";
import { Note } from '../../../../../../../api/dbinterfaces'
import { useData } from "../../../../../../contexts/HomeContext";
import { useLazyQuery } from "../../../../../../hooks/graphql/useLazyQuery";

const QUERY_USER_NOTES = `
query note( $users: String ) {
    note( users:$users ){
      users
      title
      content
      type
    }
  }
`

interface NoteTypesProps {
    id: string
}

const NoteTypes: FC<NoteTypesProps> = ( { id } ) => {

    // const { id } = useData()
    console.log( id )

    const { data, loading, error } = useQuery( QUERY_USER_NOTES, {
        variables: {
            users: id
        }
    }  )

    console.log( data, loading )
    return (
        <div className={ styles.note_types_align }>
            
            {
                data?.data?.note && data?.data?.note.map(
                    ( { content, title, type }: any ) => (
                        <TextNoteLayout text={  content } key={ content }  />
                    )
                )
            }
        </div>
    )
}

export default NoteTypes