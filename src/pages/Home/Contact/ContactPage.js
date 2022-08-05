import React from "react"
import { MainContainerContacts, Tittle, LinkedinImage, InstagramImage, GitHubImage, Images , TitlesAndIcons} from "./ContactStyled"
import Email from "../../../Components/email"
import Linkedin from "../../../Assets/linkedin.svg"
import Instagram from "../../../Assets/instagram.svg"
import GitHub from "../../../Assets/github.svg"


const ContactPage = () => {

    return (
        <div id="contato">
            <MainContainerContacts>
                <TitlesAndIcons>
                    <Tittle>Me conheça um pouco mais pelas redes socias<br></br> ou me envie um e-mail:</Tittle>
                    <Images>
                        <a href="https://www.linkedin.com/in/maximiliano-ranholi/"> <LinkedinImage src={Linkedin} /></a>
                        <a href="https://www.instagram.com/maxranholi/"><InstagramImage src={Instagram} /></a>
                        <a href="https://github.com/maxranholi/maxranholi"><GitHubImage src={GitHub} /></a>
                    </Images>
                </TitlesAndIcons>
                <Email />
            </MainContainerContacts>
        </div>
    )
}

export default ContactPage