import styled from "styled-components"

export const Wrapper = styled.div`  
  width: 100vw;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`      

export const ImageLogo = styled.img`
  width: 104px;
  height: 58px;
  margin: 24px 128px 16px;
  object-fit: contain;
`     

export const Register = styled.p`  
  width: 100vw;
  height: 42px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
  padding: 12px 32px;
`    

export const FormContainer = styled.form`   
  display:flex;
  flex-direction: column;
  width: 90vw;
`     

export const ButtonStyled = styled.button` 
  cursor: pointer;
  margin: 8px 0 15px 0;
  position: relative;
  border: 2px solid #5cb646;
  transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
  outline: none;  
  width: 90vw;
  height: 42px;
  font-weight: bold;
  padding: 12px 16px;
  border-radius: 2px;
  background-color: #5cb646;
  z-index: 1;
  overflow: hidden;

  &:hover:before {
    left: 0%;
    right: auto;
    width: 100%;
  }

  &:before {
    position: absolute;
    top: 0px;
    right: 0px;
    height: 100%;
    width: 0px;
    z-index: -1;
    content: '';
    background: #44c933; //#4bbf3d; 
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
  }
`   