import React, { useState } from "react"
import { Container, Tittle , Description} from "./TecnologiesStyled"

const Tecnologies = () => {
    const [css, setCss] = useState(false)
    const [js, setJs] = useState(false)
    const [sc, setSc] = useState(false)

return (
    <div id="tecnologias">
        <Container>
            <Tittle>Tecnologias</Tittle>
            <Description>
            <button onClick={() => setCss(!css)}>CSS</button>
            
                {css && <h2>css descrição</h2>}
           
            <button onClick={()=> setJs(!js)}>JavaScript</button>

            {js && <h2>Javascript descrição</h2>}

            <button onClick={() => setSc(!sc)} >Styled-Components</button>

            {sc && <h2>styled descrição</h2>}
            </Description>
        </Container>
    </div>
)
}

export default Tecnologies