import { noteInputState, noteInputType } from "../../interfaces/reduxInterfaces/Home/homeReduxInterfaces"
import { useAppSelector } from "../../store/hooks"

export const useNoteType: () => noteInputType = () => {
    
    const selector = useAppSelector(
        ( state: noteInputState ) => state.getNoteType
     )

    return selector
}