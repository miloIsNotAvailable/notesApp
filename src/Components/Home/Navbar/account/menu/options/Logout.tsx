import { FC } from "react";
import { useNavigate } from "react-router-dom";
import MenuOptionsLayout from "../Layouts/MenuOptionsLayouit";

const Logout: FC = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.setItem( 'accessToken', "" )
        navigate( "/" )
    }

    return (
        <div>
            <MenuOptionsLayout >
                <img src={ '' }/>
                <div onClick={ handleLogout }>logout</div>
            </MenuOptionsLayout>
        </div>
    )
}

export default Logout