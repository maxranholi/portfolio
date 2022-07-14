import styled from "styled-components"

export const MainHeader = styled.div`
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
 gap: 3rem;
 padding-right: 10px;

 @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: aqua;
    position: fixed;
    top: 0;
    right: 0;
    height: 80vh;
    padding-top: 5rem;
}
`
export const SubTittles = styled.li`
font-size: 30px;

@media (max-width: 768px) {
    color: white;
}
`

