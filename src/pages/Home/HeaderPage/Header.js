import React from "react"
import { MainHeader , Section , SubTittles , List} from "./HeaderStyled"

const Header = () => {
    return (
        <MainHeader>
            <div>
                <h1>Portfolio</h1>
            </div>
            <Section>
                <Section>
                <SubTittles>Sobre</SubTittles>
                <SubTittles>Projetos</SubTittles>
                <SubTittles>Contato</SubTittles>
                </Section>
            </Section>
        </MainHeader>
    )
}

export default Header