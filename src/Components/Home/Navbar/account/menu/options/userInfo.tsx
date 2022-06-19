import { FC, useState } from "react";
import { useData } from "../../../../../../contexts/HomeContext";
import { setAccountOpen } from "../../../../../../store/Home/accountIsOpen";
import { useAppDispatch } from "../../../../../../store/hooks";
import { styles } from "../Layouts/LayoutStyles";
import MenuOptionsLayout from "../Layouts/MenuOptionsLayouit";

const UserInfo: FC = () => {

    const [ open, setOpen ] = useState( false )

    const dispatch = useAppDispatch()

    const handleOpen: () => void 
    = () => {
        setOpen( !open )
        dispatch( setAccountOpen( { open } ) )
    }

    return (
        <MenuOptionsLayout>
            <div className={ styles.user_icon }/>
            <div onClick={ handleOpen }>
                account
            </div>
        </MenuOptionsLayout>
    )
}

export default UserInfo