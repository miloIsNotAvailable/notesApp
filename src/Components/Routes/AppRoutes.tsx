import { FC } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "../Auth/Login/Login";

const AppRoutes: FC = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Login/> } />
            </Routes>
        </BrowserRouter>    
    )
}

export default AppRoutes