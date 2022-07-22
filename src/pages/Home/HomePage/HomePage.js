import React from "react"
import Header from "../HeaderPage/Header"
import { MainContainer } from "./HomePageStyled"
import AboutPage from "../About/AboutPage"
import ProjectPage from "../Projects/ProjectsPage"
import ContactPage from "../Contact/ContactPage"


const HomePage = () => {
    return (
        <div>
            
            <Header /> 
            <MainContainer />
            <AboutPage />
            <ProjectPage />
            <ContactPage /> 
                                     
        </div>
    )
}

export default HomePage