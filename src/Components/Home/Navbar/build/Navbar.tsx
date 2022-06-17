import { FC } from "react";
import Menu from "../menu";
import Refresh from "../refresh";
import Search from "../search";
import { styles } from "./NavbarStyles";

const Navbar: FC = () => {

    return (
        <div className={ styles.navbar_wrap }>
            <Menu/>
            <Search/>
            <Refresh/>
        </div>
    )
}

export default Navbar