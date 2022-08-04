import React, { useState } from "react"
import { Container, Tittle, Description, TecDescription, ImageTec } from "./TecnologiesStyled"
import CSS from "../../../Assets/css.png"
import HTML from "../../../Assets/html.png"

const Tecnologies = () => {
    const [css, setCss] = useState(false)
    const [js, setJs] = useState(false)
    const [sc, setSc] = useState(false)
    const [html, setHtml] = useState(false)
    const [showDescription , setShowDescription] = useState("passe o mouse")




    return (
        <div id="tecnologias">
            <Container>
                <Tittle>Tecnologias</Tittle>
                <Description>
                    <TecDescription>
                        <ImageTec src={CSS} onClick={() => setShowDescription("descrição 1")}
                        onMouseOver={() => setShowDescription("descrição 1")}
                        onMouseOut={()=> setShowDescription("passe o mouse")}/>                      
                    </TecDescription>
                    <TecDescription>
                        <ImageTec src={HTML} onClick={() => setShowDescription("descrição 2")}
                         onMouseOver={() => setShowDescription("descrição 2")}
                        onMouseOut={()=> setShowDescription("passe o mouse")}/>                      
                    </TecDescription>
                    <TecDescription>
                        <button onClick={() => setSc(!sc)} >Styled-Components</button>
                        {sc && <h2>styled descrição</h2>}
                    </TecDescription>
                    <TecDescription>
                        <button onClick={() => setHtml(!html)}>HTML</button>
                        {html && <h2>HTML descrição</h2>}
                    </TecDescription>
                </Description>
                <p>{showDescription}</p>
            </Container>
        </div>
    )
}

export default Tecnologies