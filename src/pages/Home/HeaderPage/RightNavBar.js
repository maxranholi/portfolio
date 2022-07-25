import React from "react"
import styled from "styled-components"
import { ButtonList } from "./RightNavBarStyled"


const NavBar = styled.ul`  
        display: flex;
        list-style: none;

    li {     
        font-size: 30px;
        padding: 10px ;

        @media (max-width: 768px) {
            margin-left: -200px;
            margin-top: 80px;
        }
    }

    @media (max-width: 768px) {     
        flex-flow: column nowrap;
        position: fixed;
        transform:${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: -16px;
        right: 0;
        height: 70vh;
        width: 60vw;
        color: white;
        transition:transform 0.3s ease-in-out;  
        background: rgba( 255, 255, 255, 0.35 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 13.5px );
        -webkit-backdrop-filter: blur( 13.5px );
        border-radius: 10px 0 0 10px ;
        border: 1px solid rgba( 255, 255, 255, 0.18 );     
    }

`


const RightNavBar = ({ open }) => {

    return (
        <div>
            <NavBar open={open} >
                <li><a href="#sobre"><ButtonList>Sobre</ButtonList></a></li>
                <li><a href="#projetos"><ButtonList>Projetos</ButtonList></a></li>
                <li><a href="#contato"><ButtonList>Contato</ButtonList></a></li>
            </NavBar>         
        </div>

    )
}

export default RightNavBar