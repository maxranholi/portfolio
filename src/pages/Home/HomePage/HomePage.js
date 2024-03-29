import React from "react"
import Header from "../HeaderPage/Header"
import { MainContainer , Tittle, ButtonCv , Tittles , Background , ImageMobile} from "./HomePageStyled"
import fundoBotton from "../../../Assets/fundoBotton.png"
import fundoreal from "../../../Assets/fundoreal.png"
import AboutPage from "../About/AboutPage"
import ProjectPage from "../Projects/ProjectsPage"
import ContactPage from "../Contact/ContactPage"
import {useNavigate} from "react-router-dom"
import Tecnologies from "../Tecnologies/Tecnologies"
import CV from "../../../Assets/MaximilianoRanholi.CV.png"


const HomePage = () => {
    const navigate = useNavigate()

    const goToResume = (navigate) => {
        navigate("/curriculo")
    }
    return (
        <div>           
            <Header /> 
            <MainContainer>
                <Tittles>
                <Tittle>
                   Maximiliano <br></br> Ranholi
                   <h3>Desenvolvedor front-end</h3>
                </Tittle>
                <ButtonCv><a type="download" href={CV}>Currículo</a></ButtonCv>
                </Tittles>  
                   <Background src={fundoreal}/>
                   <ImageMobile src={fundoBotton}/>
            </MainContainer>
            <AboutPage />
            <ProjectPage />
            <Tecnologies /> 
            <ContactPage />                                               
        </div>
    )
}

export default HomePage