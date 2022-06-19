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

    const arr = [ 
        { type: "back", onClick: handleOpen }, 
        { type: email }, 
        { type: username } 
    ]

    if( selector ) return (
        <AnimatePresence>
            {
                selector && 
                <motion.div className={ styles.account_menu_bar }>
                    {
                        arr.map( ( { type, onClick } ) => (
                            <MenuOptionsLayout>
                                <div/>
                                <motion.div onClick={ onClick }
                                    initial={ { transform: 'translate(100%, 0)' } }
                                    animate={ { transform: 'translate(0%, 0)' } }
                                    exit={ { transform: 'translate(-100%, 0)' } }
                                >
                                    { type }
                                </motion.div>
                            </MenuOptionsLayout>
                        ) )
                    }

                </motion.div>
            }
        </AnimatePresence>
    ) 

    return( 
        <AnimatePresence exitBeforeEnter>
            {
                !selector && 
                <motion.div className={ styles.account_menu_bar }>
                    <motion.div 
                        initial={ { transform: 'translate(-100%, 0)' } }
                        animate={ { transform: 'translate(0%, 0)' } }
                        exit={ { transform: 'translate(100%, 0)' } }
                    >
                        <Logout />
                    </motion.div>
                    <motion.div
                        initial={ { transform: 'translate(-100%, 0)' } }
                        animate={ { transform: 'translate(0%, 0)' } }
                        exit={ { transform: 'translate(100%, 0)' } }
                    >
                        <UserInfo />
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
     )
}

export default AccountMenuBar