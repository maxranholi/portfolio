import styled from "styled-components";

export const MainContainerContacts = styled.div`
box-sizing: border-box;
height: 100%;
width: 100%;
background-color: #080e21;
display: flex;
justify-content: space-around;
align-items: center;
line-height: 2px;

@media(max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`
export const TitlesAndIcons = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 3rem;

@media (max-width: 768px) {
    gap: 0rem;
}
`
export const Tittle = styled.h3`
box-sizing: border-box;
font-size: 3rem;
color: #FFFFFF;
font-family: Arial, Helvetica, sans-serif;
font-weight: lighter;
flex-wrap: wrap;
line-height: 5rem;

@media (max-width: 768px) {
    font-size: 3rem;
    padding-left: 3rem;
}
`
export const Images = styled.div`
box-sizing: border-box;
width: 100%;

@media (max-width: 768px) {
    display: flex;
    @media (max-width: 768px) {
    padding-left: 1.5rem;
}
}

`
export const LinkedinImage = styled.img`
background-image: url(${props => props.img});
height: 80px;
width: 22rem;

@media (max-width: 768px) {
    width:12rem
}
`
export const InstagramImage = styled.img`
background-image: url(${props => props.img});
height: 80px;
width: 22rem;

@media (max-width: 768px) {
    width:12rem
}
`
export const GitHubImage = styled.img`
background-image: url(${props => props.img});
height: 80px;
width: 22rem;

@media (max-width: 768px) {
    width: 12rem;
}
`
