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

@media(max-width: 768px) {
    flex-direction: column;
}
`
export const TecDescription = styled.div`
box-sizing: border-box;
display: flex;
gap: 1rem;
height: 40rem;
width: 80rem;
flex-wrap: wrap;
margin-left: 2rem;
margin-bottom: 3rem;

@media(max-width: 768px) {
    height: 50rem;
    width: 30rem;
    gap: 3rem;
    align-items: center;
    margin-left: 5rem;
}
`
export const ImageTec = styled.img`
box-sizing: border-box;
background-image: url(${props => props});
cursor: pointer;
height: 16rem;
width: 16rem;
opacity: 0.5;
//filter: brightness(40%) sepia() hue-rotate(200deg) saturate(1600%) contrast(0.8);
transition: 0.3s;

@media(max-width: 768px) {
    height: 10rem;
    width: 10rem;
}


&:hover {
    filter: none;
    opacity: 1;
    height: 20rem;
    width: 20rem;

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
width: 50rem;
color:#10193c;
font-size: 3.5rem;
line-height: 4.5rem;
font-family: Arial, Helvetica, sans-serif;
margin-bottom: 3rem;

@media(max-width: 768px) {
    height: 30rem;
    width: 30rem;
    font-size: 2rem;
    /* margin-top: 15rem; */
}
`