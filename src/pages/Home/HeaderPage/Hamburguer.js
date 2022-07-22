import React, { useState } from "react"
import { BurguerStyled } from "./HamburguerStyled"
import RightNavBar from "./RightNavBar"


const Hamburguer = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <BurguerStyled open={open} onClick={() => setOpen(!open)} >
                <div></div>
                <div></div>
                <div></div>
            </BurguerStyled>
            <RightNavBar open={open} setOpen={setOpen}/>
        </div>
    )
}

export default Hamburguer