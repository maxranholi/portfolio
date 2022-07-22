import styled from "styled-components"

export const NavBar = styled.ul`  
        display: flex;
        justify-content: space-around;
        list-style: none;
        flex-flow: row nowrap;
    

    li {
        font-size: 30px;
        padding: 10px 10px ;
    }

    @media (max-width: 768px) {        
        flex-flow: column nowrap;
        position: relative;
        right: 0;
        height: 70vh;
        background-color: pink;
        color: white;
        transform: ${({open}) => open ? "translateX(0)" : "translateX(100%)"};
        transition: transform 0.3 ease-in-out;
    }

`
