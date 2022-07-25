import styled from "styled-components"

export const MainHeader = styled.nav`
box-sizing: border-box;
width: 100vw;
height: 10vh;
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 10px;
padding-right: 20px;
background-color: #f3f4f6;

`
export const Section = styled.ul`
 display: flex;
 list-style: none;
 padding-right: 10px;
`
export const Tittle = styled.h3`
color: #ff9800;
font-size: 35px;
margin-left: 50px;
@media (max-width: 768px) {
        margin-left: 4px;
    }
`



