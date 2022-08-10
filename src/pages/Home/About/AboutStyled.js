import styled from "styled-components";

export const MainContainerAbout = styled.div`
box-sizing: border-box;
height: 100%;
width: 100%;
background-color: white;
display: grid;
grid-template-columns: 36% 60%;

@media (max-width: 1366px) {
    grid-template-columns: 33% 67%;
}

@media (max-width: 768px) {
    display: flex;
}
`
export const Title = styled.h2`
text-align: center;
color: #ff9800;
font-size: 6rem;
line-height: 4rem;

@media (max-width: 1367px) {
font-size: 4.5rem;
line-height: 2rem;
}
`
export const Titles = styled.div`

`

export const Text = styled.h4`
line-height: 3.9rem;
color: #10193c;
font-size: 3.7rem;
font-weight: lighter;



h3{
    line-height: 3rem;
color: #10193c;
font-size: 3.5rem;
font-weight: lighter;
text-align: center ;
}

@media (max-width: 1366px) {
    line-height: 3rem;
    font-size: 2.5rem;

    h3{
    line-height: 3rem;
    font-size: 2.5rem;

}
}

@media (max-width: 768px) {
    margin: 0.9rem;
}
`
export const Image = styled.img`
background-image: url(${props => props.img});
height: 81rem;
width: 60rem;
margin: 2rem;
margin-left: 5rem;

@media (max-width: 1367px) {
    margin-left: 1.75rem;
    height: 58rem;
    width: 40rem;
    margin: 2rem;
}

@media (max-width: 768px) {
    display: none;
}
`