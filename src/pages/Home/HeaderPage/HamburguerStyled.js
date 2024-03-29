import styled from "styled-components"

export const BurguerStyled = styled.div`
width: 2rem;
height: 2rem;
position: fixed;
top: 28px;
right: 5px;
z-index: 20;
display: none;

@media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    padding-right: 20px;
}

 div{
    width: 2rem;
    height: 0.25rem;
    background-color: ${({open}) => open ? "grey" : "black"};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    
    &:nth-child(1) {
        transform: ${({open}) => open ? "rotate(45deg)" : "rotate(o)"};
    }
    &:nth-child(2) {
        transform: ${({open}) => open ? "translateX(100%)" : "translateX(0)"};
        opacity: ${({open}) => open ? 0 : 1};
    }
    &:nth-child(3) {
        transform: ${({open}) => open ? "rotate(-45deg)" : "rotate(o)"};
    }
 }
`