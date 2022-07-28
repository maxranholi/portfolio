import styled from "styled-components";

export const MainContainerContacts = styled.div`
box-sizing: border-box;
height: 100%;
width: 100%;
background-color: #080e21;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
line-height: 2px;
`
export const Tittle = styled.h3`
box-sizing: border-box;
font-size: 2rem;
color: #FFFFFF;

@media (max-width: 768px) {
    font-size: 1rem;
    
}
`
export const Images = styled.div`
box-sizing: border-box;
margin-bottom: 10px;
`
export const LinkedinImage = styled.img`
background-image: url(${props => props.img});
height: 80px;
`
export const InstagramImage = styled.img`
background-image: url(${props => props.img});
height: 80px;
`
export const GitHubImage = styled.img`
background-image: url(${props => props.img});
height: 80px;
`
