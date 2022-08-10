import styled from "styled-components";

export const MainContainerAbout = styled.div`
box-sizing: border-box;
height: 100%;
width: 100%;
background-color: white;
display: grid;
grid-template-columns: 35% 60%;

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
font-size: 4.5rem;
line-height: 2rem;
`
export const Titles = styled.div`

`

export const Text = styled.h4`
line-height: 2.8rem;
color: #10193c;
font-size: 2.5rem;
font-weight: lighter;


h3{
    line-height: 3rem;
color: #10193c;
font-size: 2.5rem;
font-weight: lighter;
text-align: center ;
}

@media (max-width: 1366px) {
    
}

@media (max-width: 768px) {
    margin: 0.9rem;
}
`
export const Image = styled.img`
background-image: url(${props => props.img});
height: 55rem;
margin: 2rem;
margin-left: 5rem;

@media (max-width: 1367px) {
    margin-left: 1.75rem;
}

@media (max-width: 768px) {
    display: none;
}
`