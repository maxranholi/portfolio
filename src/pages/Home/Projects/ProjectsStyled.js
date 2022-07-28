import styled from "styled-components";

export const MainContainerProjects = styled.div`
height: 100%;
width: 100%;
background-color: #f4f5f6;
display: flex;
flex-direction: column;
align-items: center;
line-height: 1rem;
overflow-x: scroll;
margin-top: -5rem;

/* &::-webkit-scrollbar{
width: 0
} */
`
export const Tittle = styled.h2`
color: #ff9800;
font-size: 5rem;
background-color: #f4f5f6;
text-align: center;
line-height: 10rem;
`
export const Cards = styled.div`
display: flex;
margin-left: 37rem;
gap: 2rem;
margin-bottom: 2rem;
padding-top: 2rem;
margin-right: 1rem;

@media (max-width: 768px) {
    margin-left: 95rem;
}
`
export const CardProject = styled.div`
height: 50rem;
width: 40rem;
background-color: white;
border-radius: 2px;
box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
display: flex;
align-items: center;
justify-content: start;
flex-direction: column;


@media (max-width: 768px) {
    height: 55rem;
    width: 30rem;
}

    h3 {
        color:#10193c;
        font-size: 2.2rem;
    }
    h4 {
        color:#10193c;
        font-size: 2rem;
    }
    h5{
        color:#10193c;
        font-size: 1.8rem;
    }
`
export const CommingSoonCard = styled.div`
width: 36rem;
height: 15rem;
background-color: #d4d4d5;
margin: 2rem;
border-radius: 2px;
display: flex;
align-items: center;
justify-content: center;

@media(max-width: 768px) {
    width: 28rem;
}

h4{
    font-size: 3rem;
    color: #8b8b8c;
    @media(max-width: 768px) {
    font-size: 2.5rem;
}
}
`
export const Images = styled.div`
display: flex;
margin-top: 6rem;
gap: 2rem;
@media(max-width: 768px) {
    margin-top: 10rem;
}
`

export const LinkImage = styled.img`
background-image: url(${props => props.img});
height: 4rem;
`
export const GitHubLinkImage = styled.img`
background-image: url(${props => props.img});
height: 4rem;
`
