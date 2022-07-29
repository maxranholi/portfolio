import React from "react"
import Hamburguer from "./Hamburguer"
import { MainHeader , Tittle} from "./HeaderStyled"


const Header = () => {
    return (
        <div id="inicio">
            <MainHeader>
                <Tittle>Seja bem vindo</Tittle>
                <Hamburguer />
            </MainHeader>          
        </div>

    )
}

export default Header