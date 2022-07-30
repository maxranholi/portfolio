import React, { useState } from "react"
import { Container, Tittle, Description, TecDescription } from "./TecnologiesStyled"

const Tecnologies = () => {
    const [css, setCss] = useState(false)
    const [js, setJs] = useState(false)
    const [sc, setSc] = useState(false)
    const [html, setHtml] = useState(false)

    return (
        <div id="tecnologias">
            <Container>
                <Tittle>Tecnologias</Tittle>
                <Description>
                    <TecDescription>
                        <button onClick={() => setCss(!css)}>CSS</button>

                        {css && <h2>CSS descrição</h2>}
                    </TecDescription>
                    <TecDescription>
                        <button onClick={() => setJs(!js)}>JavaScript</button>

                        {js && <h2>Javascript descrição</h2>}
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
            </Container>
        </div>
    )
}

export default Tecnologies