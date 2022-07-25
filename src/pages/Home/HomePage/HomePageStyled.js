import styled from "styled-components";

export const MainContainer = styled.div`
box-sizing: border-box;
height: 90vh;
width: 100vw;
background-color: #f3f4f6;
display: flex;
gap: 65px;
justify-content: flex-end;
@media (max-width: 768px){
  height: 100%;
    flex-direction: column;
    justify-content: space-around;
}
`
export const Tittles = styled.div`
box-sizing: border-box;
 @media (max-width: 768px) {
    margin-top: -90px;
 }
`
export const Tittle = styled.h1`
box-sizing: border-box;
margin-top: 100px;
color: #10193c;
font-size: 70px;
 h3 {
    font-size: 30px;
    @media (max-width: 768px) {
        font-size: 25px;
    }
 }
 @media (max-width: 768px) {
    font-size: 40px;
    margin-left: 15px
 }
`
export const Background = styled.img`
box-sizing: border-box;
background-image: url(${props => props.img});
margin-top: 20px;

@media (max-width: 768px) { 
    display: none;
}
`

export const ButtonCv = styled.button`
box-sizing: border-box;
margin-top: -50px;
margin-left: 85px;
  background: #ff9800;
  border: 1px solid #ff9800;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;
  outline: 0;
  padding: 12px 14px;
  text-align: center; 
  width: 100px;

&:hover{
  background-color: white;
  color: #ff9800;
}

@media (max-width: 768px) {
    margin-left: 15px;
    margin-top: 2px;
 }
`

export const ImageMobile = styled.img`
background-image: url(${props => props.img});
display: none;

@media (max-width: 768px) {
   margin-top: -50px;
   display: inline;
   height: 400px;
}
`
