import styled from "styled-components"

export const Container = styled.div`
box-sizing: border-box;
height: 100%;
width: 100%;
@media(max-width: 768px) {
   display: flex;
   flex-direction: column;
}
`
export const Tittle = styled.h2`
box-sizing: border-box;
color: #ff9800;
font-size: 5rem;
text-align: center;
`
export const Description = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
gap: 5rem;

@media(max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
}
`
export const TecDescription = styled.div`
box-sizing: border-box;
display: flex;
gap: 1rem;
height: 40rem;
width: 45%;
flex-wrap: wrap;
margin-left: 2rem;

@media(max-width: 768px) {
    height: 35rem;
    width: 40rem;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;
}
`
export const ImageTec = styled.img`
box-sizing: border-box;
background-image: url(${props => props});
cursor: pointer;
height: 16em;
width: 16em;
opacity: 0.5;
//filter: brightness(40%) sepia() hue-rotate(10deg) saturate(600%) contrast(0.8);
transition: 0.3s;

@media(max-width: 1367px) {
    height: 12em;
    width: 12em;
}

@media(max-width: 768px) {
    height: 8rem;
    width: 8rem;
}


&:hover {
    filter: none;
    opacity: 1;
    height: 16rem;
    width: 16rem;

    @media(max-width: 768px) {
    height: 12rem;
    width: 12rem;
}
}
`
export const Text = styled.div`
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: center;
height: 40rem;
width: 40%;
color:#10193c;
font-size: 3.5rem;
line-height: 4.5rem;
font-family: Arial, Helvetica, sans-serif;
margin-bottom: 3rem;

@media(max-width: 768px) {
    height: 30rem;
    width: 30rem;
    font-size: 2rem;
    color:#10193c;
}
`