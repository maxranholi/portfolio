import styled from "styled-components"

export const ButtonList = styled.button`
  margin-top: -50px;
  margin-left: 180px;
  background: #006877;
  border: 1px solid #006877;
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
  width: 120px;


&:hover{
  background-color: #ff9800;
  color: #FFFFFF;
  border: 1px solid #ff9800;
}

@media (max-width: 768px) {
width: 210px;
height: 100px;
}
`