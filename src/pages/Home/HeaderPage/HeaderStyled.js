import styled from "styled-components"

export const MainHeader = styled.nav`
box-sizing: border-box;
width: 100%;
height: 10vh;
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 1rem;
padding-right: 2rem;
background-color: #f3f4f6;
position: fixed;
@media (max-width: 768px) {
        position: sticky;
    }
`
export const Section = styled.ul`
 display: flex;
 list-style: none;
 padding-right: 1rem;
`
export const Tittle = styled.h3`
color: #ff9800;
font-size: 3.5rem;
margin-left: 50px;
@media (max-width: 768px) {
        margin-left: 0.4rem;
    }
`



