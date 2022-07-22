import React from "react"
import Hamburguer from "./Hamburguer"
import { MainHeader } from "./HeaderStyled"


const Header = () => {
    return (
        <div>
            <MainHeader>
                <h1>Max</h1>
                <Hamburguer />
            </MainHeader>
            
        </div>

    )
}

export default Header