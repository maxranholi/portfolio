import React from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import MaximilianoRanholiCV from "../../Assets/MaximilianoRanholi.CV.png"

const ResumeStyled = styled.div`
width: 100%;
`

const Resume = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
    return (
        <ResumeStyled>
            <button onClick={()=> goBack()}>Voltar</button>
            <img src={MaximilianoRanholiCV}/>           
        </ResumeStyled>
    )
}

export default Resume