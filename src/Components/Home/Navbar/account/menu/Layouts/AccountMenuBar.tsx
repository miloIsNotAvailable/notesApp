import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { useData } from "../../../../../../contexts/HomeContext";
import { accountOpen } from "../../../../../../interfaces/reduxInterfaces/Home/homeReduxInterfaces";
import { setAccountOpen } from "../../../../../../store/Home/accountIsOpen";
import { useAppDispatch, useAppSelector } from "../../../../../../store/hooks";
import { styles } from "../../build/AccountStyles";
import Logout from "../options/Logout";
import UserInfo from "../options/userInfo";
import MenuOptionsLayout from "./MenuOptionsLayouit";

type isOpenType = { getAccountOpen: accountOpen }

const AccountMenuBar: FC = () => {

    const selector = useAppSelector( ( state: isOpenType ) => state.getAccountOpen.open )
    const { email, id, username, loading } = useData()

    const dispatch = useAppDispatch()

    const handleOpen: () => void 
    = () => {
        dispatch( setAccountOpen( { open: false } ) )
    }

    if( selector ) return (
        <AnimatePresence>
            {
                selector && 
                <motion.div className={ styles.account_menu_bar }
                    initial={ { maxHeight: 0 } }
                    animate={ { maxHeight: "calc( ( var( --icon-size ) + 1rem ) * 3 )" } }
                    exit={ { maxHeight: "auto" } }
                >
                    <MenuOptionsLayout>
                        <div/>
                        <div onClick={ handleOpen }>{ "back" }</div>
                    </MenuOptionsLayout>
                    <MenuOptionsLayout>
                        <div/>
                        <div>{ email }</div>
                    </MenuOptionsLayout>
                    <MenuOptionsLayout>
                        <div/>
                        <div>{ username }</div>
                    </MenuOptionsLayout>
                </motion.div>
            }
        </AnimatePresence>
    ) 

    return( 
        <AnimatePresence>
            {
                !selector && 
                <motion.div className={ styles.account_menu_bar }>
                    <Logout />
                    <UserInfo />
                </motion.div>
            }
        </AnimatePresence>
     )
}

export default AccountMenuBar