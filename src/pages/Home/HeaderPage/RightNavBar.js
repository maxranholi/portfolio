import React from "react"
import styled from "styled-components"


const NavBar = styled.ul`  
        display: flex;
        list-style: none;
        gap: 6rem;
        @media (max-width: 768px) {
           gap: 0rem;
        }

    li {     
        font-size: 25px;

        @media (max-width: 768px) {
            margin-left: -200px;
            margin-top: 80px;
        }
    }
    a {
            font-size: 2.5rem;
            text-decoration: none;
            color: #10193c;
            transition: 0.3s;

            &:hover{
                font-size: 3rem;
            }

        @media (max-width: 768px) {
            margin-left: 175px;
            margin-top: 80px;
            font-size: 2rem;
        }            
        }

    @media (max-width: 768px) {     
        flex-flow: column nowrap;
        position: fixed;
        transform:${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: -16px;
        right: 0;
        height: 75vh;
        width: 35vw;
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
                <li><a href="#inicio">Início</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#tecnologias">Tecnologias</a></li>
                <li><a href="#contato">Contato</a></li>
            </NavBar>
        </div>

    )
}

export default RightNavBar