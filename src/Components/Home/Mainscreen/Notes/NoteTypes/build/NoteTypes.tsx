import { FC } from "react";
import TextNoteLayout from "../text/TextNoteLayout";
import { styles } from "./NoteTypesStyles";

const NoteTypes: FC = () => {

    return (
        <div className={ styles.note_types_align }>
            <TextNoteLayout text="lorem ipsum dolorem sit amet" />
            <TextNoteLayout text="lorem ipsum dolorem sit amet lorem ipsum dolorem sit amet lorem ipsum dolorem sit ametlorem ipsum dolorem sit ametlorem ipsum dolorem sit ametlorem ipsum dolorem sit ametlorem ipsum dolorem sit ametlorem ipsum dolorem sit amet" />
            <TextNoteLayout text="lorem ipsum dolorem sit amet lorem " />
            <TextNoteLayout text="sit ametlorem ipsum dolorem sit ametlorem ipsum dolorem sit amet ametlorem ipsum dolorem sit amet ametlorem ipsum dolorem sit amet ametlorem ipsum dolorem sit amet" />
            <TextNoteLayout text="sit ametlorem ipsum dolorem sit amet" />
            <TextNoteLayout text="sit ametlorem ipsum dolorem sit amet" />
            <TextNoteLayout text="sit ametlorem  ametlorem ipsum dolorem sit amet ametlorem ipsum dolorem sit amet" />
        </div>
    )
}

export default NoteTypes