import styled from "styled-components";

export const  Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 30rem;
width: 50rem;
background-color: white;
border: 1px black solid;
margin: 2rem;
border-radius: 5px;

@media (max-width: 768px) {
   width: 90%;
   margin-bottom: 5rem;
}
`
export const FormEmail = styled.form`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 1.3rem;

label {
    box-sizing: border-box;
color:#10193c;
font-family: Arial, Helvetica, sans-serif;
}
`
export const Inputs = styled.input`
 padding: 8px;
     font-size: 20px;
     border-width: 0px;
     border-color: #CCCCCC;
     background-color: #FFFFFF;
     color: #000000;
     border-style: solid;
     border-radius: 5px;
     box-shadow: 0px 0px 13px rgba(66,66,66,.20);
     width: 40rem;
     height: 2rem;

     @media (max-width: 768px) {
      width: 105%;
}
`
export const InputMessage = styled.textarea`
     padding: 8px;
     font-size: 20px;
     border-width: 0px;
     border-color: #CCCCCC;
     background-color: #FFFFFF;
     color: #000000;
     border-style: solid;
     border-radius: 5px;
     box-shadow: 0px 0px 13px rgba(66,66,66,.20);
     width: 40rem;
     height: 6rem;

     @media (max-width: 768px) {
      height: 8rem;
      width: 105%;
}
`
export const ButtonSend = styled.input`
box-sizing: border-box;
  background: #ff9800;
  border: 1px solid #ff9800;
  border-radius: 5px;
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
  box-shadow: 0px 0px 13px rgba(66,66,66,.20);

  a{
    text-decoration: none;
    color: white;
}
  
&:hover {
  background-color: white;
  color: #ff9800;  
}
`