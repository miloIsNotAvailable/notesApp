import { ChangeEvent, DragEvent } from "react"
import { setNoteType } from "../../../../../store/Home/NoteInputType"
import { useAppDispatch } from "../../../../../store/hooks"

type event = DragEvent<HTMLDivElement> | ChangeEvent<HTMLInputElement>

const eventIsDrag = ( e: event ): 
e is DragEvent<HTMLDivElement> => {
    const v = e as DragEvent<HTMLDivElement>

    return !!v.dataTransfer
}

export const useOpenImage: 
() => ( e:event ) => void = () => {

    const dispatch = useAppDispatch()

    return ( e ) => {
        
        const drag = eventIsDrag( e )

        e.preventDefault()
        drag && e.dataTransfer.getData( 'text/plain' )
        const file = drag ? e.dataTransfer.files : e.target.files
        const img = new FileReader()
        console.log( file )

        img.onload = e => {
            if( !e.target?.result ) return
            
            dispatch(setNoteType( { 
                content: e?.target?.result as string,
                type: "image"
             } )  )
        }
        file && img.readAsDataURL( file[0] )
    }
}