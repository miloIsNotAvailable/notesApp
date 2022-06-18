import { FC } from "react";
import Account from "../account";
import Menu from "../menu";
import Refresh from "../refresh";
import Search from "../search";
import Settings from "../settings";
import { styles } from "./NavbarStyles";

const Navbar: FC = () => {

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