import React from "react"
import { MainContainerContacts, Tittle, LinkedinImage, InstagramImage, GitHubImage, Images } from "./ContactStyled"
import Linkedin from "../../../Assets/linkedin.svg"
import Instagram from "../../../Assets/instagram.svg"
import GitHub from "../../../Assets/github.svg"


const ContactPage = () => {

    return (
        <div id="contato">
            <MainContainerContacts>
                <Tittle>Me conheça um pouco mais pelas redes socias:</Tittle>
                <Images>
                   <a href="https://www.linkedin.com/in/maximiliano-ranholi/"> <LinkedinImage src={Linkedin} /></a>
                    <a href="https://www.instagram.com/maxranholi/"><InstagramImage src={Instagram} /></a>
                    <a href="https://github.com/maxranholi/maxranholi"><GitHubImage src={GitHub} /></a>
                </Images>
            </MainContainerContacts>
        </div>
    )
}

export default ContactPage