import React, { useState } from "react"
import { Container, Tittle } from "./TecnologiesStyled"

const Tecnologies = () => {
    const [css , setCss] = useState("é pra estilizar")
    const [js , setJs] = useState("é pra programar")
    const [sc , setSc] = useState("é pra estilizar mais maneiro")

    const onChangeCss = (event) => {
        setCss(event.target.value)
    }


console.log(css)
    return (
        <div id="tecnologias">
            <Container>
                <Tittle>Tecnologias</Tittle>
                <button value={css} onChange={onChangeCss}>CSS</button>
                <button>JavaScript</button>
                <button>Styled-Components</button>
            </Container>
        </div>
    )
}

export default Tecnologies