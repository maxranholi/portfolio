import React, { useState } from "react"
import { Container, Tittle, Description, TecDescription, ImageTec, Text } from "./TecnologiesStyled"
import CSS from "../../../Assets/css.png"
import HTML from "../../../Assets/html.png"
import javaScript from "../../../Assets/javascript.png"
import REACT from "../../../Assets/react.png"
import styled from "../../../Assets/styled-components.png"
import git from "../../../Assets/git.png"
import gitHub from "../../../Assets/github.jpg"
import typeScript from "../../../Assets/typescript.png"


const Tecnologies = () => {
    const [showDescription, setShowDescription] = useState("Interaja com os ícones")

    const titles = {
        html: "HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web",
        css: "Cascading Style Sheets (CSS) é um mecanismo para adicionar estilo (cores, fontes, espaçamento, etc.) a um documento web.",
        js: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica.",
        styled: "Styled components é uma biblioteca que possibilita escrever códigos CSS dentro do JavaScript. Com ele, você pode criar websites bonitos e funcionais. Além disso, ganhar mais agilidade e precisão no desenvolvimento web.",
        react: "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais.",
        git: "Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.",
        gitHub: "GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.",
        typeScript: "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.",
    }

    return (
        <div id="tecnologias">
            <Container>
                <Tittle>Tecnologias</Tittle>
                <Description>
                    <TecDescription>
                        <ImageTec src={CSS} onClick={() => setShowDescription(titles.css)}
                            onMouseOver={() => setShowDescription(titles.css)}
                            onMouseOut={() => setShowDescription("Interaja com os ícones")}
                        />
                        <ImageTec src={HTML} onClick={() => setShowDescription(titles.html)}
                            onMouseOver={() => setShowDescription(titles.html)}
                            onMouseOut={() => setShowDescription("Interaja com os ícones")}
                        />
                        <ImageTec src={javaScript} onClick={() => setShowDescription(titles.js)}
                            onMouseOver={() => setShowDescription(titles.js)}
                            onMouseOut={() => setShowDescription("Interaja com os ícones")}
                        />
                        <ImageTec src={styled} onClick={() => setShowDescription(titles.styled)}
                            onMouseOver={() => setShowDescription(titles.styled)}
                            onMouseOut={() => setShowDescription("Interaja com os ícones")}
                        />
                        <ImageTec src={REACT} onClick={() => setShowDescription(titles.react)}
                            onMouseOver={() => setShowDescription(titles.react)}
                            onMouseOut={() => setShowDescription("Interaja com os ícones")}
                        />
                        <ImageTec src={git} onClick={() => setShowDescription(titles.git)}
                            onMouseOver={() => setShowDescription(titles.git)}
                            onMouseOut={() => setShowDescription("Interaja com os ícones")}
                        />
                        <ImageTec src={gitHub} onClick={() => setShowDescription(titles.gitHub)}
                            onMouseOver={() => setShowDescription(titles.gitHub)}
                            onMouseOut={() => setShowDescription("Interaja com os ícones")}
                        />
                        <ImageTec src={typeScript} onClick={() => setShowDescription(titles.typeScript)}
                            onMouseOver={() => setShowDescription(titles.typeScript)}
                            onMouseOut={() => setShowDescription("Interaja com os ícones")}
                        />
                    </TecDescription>
                    <Text>
                        <p>{showDescription}</p>
                    </Text>
                </Description>
            </Container>
        </div>
    )
}

export default Tecnologies