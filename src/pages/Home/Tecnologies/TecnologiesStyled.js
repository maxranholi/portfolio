import styled from "styled-components"

export const Container = styled.div`
height: 100vh;
width: 100%;
`
export const Tittle = styled.h2`
color: #ff9800;
font-size: 5rem;
text-align: center;
`
export const Description = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
gap: 30px;
`
export const TecDescription = styled.div`
display: flex;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;


button {
    height: 70px;
}
`
export const ImageTec = styled.img`
background-image: url(${props => props});
cursor: pointer;
height: 10rem;
width: 10rem;
opacity: 0.3;
transition: 0.3s;

&:hover {
    opacity: 1;
    height: 14rem;
    width: 14rem;
}
`