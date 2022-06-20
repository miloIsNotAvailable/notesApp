import { FC } from "react";
import { useData } from "../../../../contexts/HomeContext";
import Account from "../account";
import Menu from "../menu";
import Refresh from "../refresh";
import Search from "../search";
import Settings from "../settings";
import { styles } from "./NavbarStyles";

const Navbar: FC = () => {

    const { email } = useData()
    console.log( email )

    return (
        <div className={ styles.navbar_wrap }>
            <Menu />
            <Search />
            <Refresh />
            <Settings />
            <Account />
        </div>
    )
}

export default Navbar