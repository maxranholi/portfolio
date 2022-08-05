import React from "react"
import { MainContainerAbout , Title , Text , Image , ImageAndText , Titles} from "./AboutStyled"
import AboutImg from "../../../Assets/about.jpg"

const AboutPage = () => {
    return (
        
        <MainContainerAbout id="sobre">
            <Image src={AboutImg}/>
            <Titles>
            <Title>Sobre mim</Title>
            <Text><h3>Programar me apresentou um desafio tão satisfatório quanto viajar o mundo.</h3>


Trabalhar por dois anos a bordo de um navio cruzeiro me proporcionou momentos que vou levar para vida toda, como a chance de aperfeiçoar o meu inglês, de estar em portos diferentes quase que diariamente, contemplar a imensidão do mar e a sua beleza e acima de tudo o contato com culturas diferentes e as pessoas que as representavam. <br></br><br></br>


Sempre foi desafiador e empolgante colocar o pé em um lugar novo, assim como se mostrou a programação depois que tive o primeiro contato, tendo o meu “Hello, World” quase que como o meu primeiro carimbo no passaporte nessa nova etapa, em que cada erro e tempo de estudo é recompensado pela renderização do seu código na tela. <br></br><br></br>


Então depois de tanto ter viajado, uma nova branch, que contém HTML, CSS, JavaScript, React, e acima de tudo, de oportunidades, se abriu para que eu possa continuar carimbando o meu passaporte de conhecimentos na programação.
</Text>
            </Titles>        
        </MainContainerAbout>
    )
}

export default AboutPage