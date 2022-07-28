import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/Home/HomePage/HomePage"
import Resume from "../../src/pages/Resume/Resume"


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="curriculo" element={<Resume />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router