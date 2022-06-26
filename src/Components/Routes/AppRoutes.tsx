import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import { 
    BrowserRouter, 
    Route, 
    Routes,
    useLocation 
} from 'react-router-dom'
import Login from "../Auth/Login/Login";
import Register from '../Auth/Register/Register'
import Home from "../Home/Home";
import NoteCanvas from "../Home/Mainscreen/Notes/NoteTypes/draw/build/NoteCanvas";

const AppRoutes: FC = () => {

    const location = useLocation()

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={ location } key={ location?.pathname }>
                <Route path="/"  element={ <Login/> } />
                <Route path="/signup" element={ <Register/> } />
                <Route path="/home" element={ <Home/> } />
                <Route path="/note_canvas" element={ <NoteCanvas/> } />
            </Routes>
        </AnimatePresence>
    )
}

export default AppRoutes