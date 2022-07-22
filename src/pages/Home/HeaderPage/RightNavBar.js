import React from "react"
import styled from "styled-components"
import ContactPage from "../Contact/ContactPage"


const NavBar = styled.ul`  
        display: flex;
        justify-content: space-around;
        list-style: none;
        flex-flow: row nowrap;
    

    li {
        text-align: start;
        font-size: 30px;
        padding: 10px 10px ;
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
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#contato" >Contato</a></li>
            </NavBar>         
        </div>

    )
}

export default RightNavBar