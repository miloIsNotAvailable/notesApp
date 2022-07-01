import { FC, MouseEvent, useEffect, useRef } from "react";
import { setSearchModalState } from "../../../../../../interfaces/reduxInterfaces/Home/homeReduxInterfaces";
import { setSearchModalOpen } from "../../../../../../store/Home/SearchBarOpen";
import { useAppDispatch, useAppSelector } from "../../../../../../store/hooks";
import { styles } from "./TextNoteLayoutStyles";
import { AnimatePresence, motion } from 'framer-motion'
import { useGetNewUsersMutation } from "../../../../../../store/apis/getPosts";
import { useData } from "../../../../../../contexts/HomeContext";

interface TextNoteAddUsersProps {
    // noteId: string, 
    // open: boolean
}

const UPDATE_USERS = `
mutation updateUsers( $id: String, $noteId:String, $username:String ) {
    updateUsers(  input:{
      id:$id, 
      username:$username,
        noteId: $noteId
    } ) {
      id
      username
      noteId
    }
  }
`
const TextNoteAddUsers: FC<TextNoteAddUsersProps> 
= () => {

    const [ getNewUsers, { data, isLoading, isError } ] = useGetNewUsersMutation()
    const { id, username } = useData()

    console.log( data, isError )

    const inputRef = useRef<HTMLInputElement>( null )
    const wrapperRef = useRef<HTMLDivElement>( null )

    const dispatch = useAppDispatch()
    const { open, x, y, noteId } = useAppSelector( 
        ( state: setSearchModalState ) => state.getSearchModalOpen
     )

    const handleSubmit: () => void = () => {
        
        if( !inputRef.current?.value )return
        getNewUsers( {
            body: UPDATE_USERS, 
            variables: {
                noteId,
                id,
                username: inputRef.current?.value
            }
        } )
    }

    const handleBlur: () => void = () => {
        
        setTimeout( () => {
            dispatch( setSearchModalOpen( {
                open: false,
                x: x,
                y: y,
                noteId: noteId
            } ) )
        }, 100 )
    }

    return (
        <AnimatePresence exitBeforeEnter>
            {
                open &&
                <motion.div
                    style={ {
                        left: x + 'px',
                        top: `calc( ${ y }px - 2rem )`,
                    } }
                    ref={ wrapperRef }
                    className={ styles.find_user }
                    tabIndex={ 4 }
                    initial={ { opacity: 0, transform: 'translate( -50%, -10% )' } }
                    animate={ { opacity: 1, transform: 'translate( -50%, -50% )'} }
                    exit={ { opacity: 0, transform: 'translate( -50%, 10% )' } }
                >
                    <input 
                        ref={ inputRef }
                        placeholder={ 'search' }
                        className={ styles.find_user_input }   
                        onBlur={ handleBlur } 
                        autoFocus
                    />
                    <div 
                        className={ styles.find_user_add }
                        onClick={ handleSubmit }
                        children={  isLoading ? "⏳" : isError ? "❌" : "+"  }
                    />
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default TextNoteAddUsers