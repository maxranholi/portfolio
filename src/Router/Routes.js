import {BrowserRouter , Routes , Route} from "react-router-dom"
import HomePage from "../pages/Home/HomePage/HomePage"
import AboutPage from "../pages/Home/About/AboutPage"
import ProjectPage from "../pages/Home/Projects/ProjectsPage"
import ContactPage from "../pages/Home/Contact/ContactPage"


const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element = {<HomePage/>}/>
            <Route path = "/about" element = {<AboutPage/>}/>
            <Route path = "/projects" element = {<ProjectPage/>}/>
            <Route path = "/contact" element = {<ContactPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router