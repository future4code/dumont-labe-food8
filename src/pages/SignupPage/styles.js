import styled from "styled-components"

export const Wrapper = styled.div`  
  width: 100vw;
  max-width: 420px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0 26px;
  margin: 0 auto;
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
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
  margin: 16px 0 0;
  padding: 12px 32px;
`    

export const FormContainer = styled.form`   
  display:flex;
  flex-direction: column;
  width: 328px;
  border-radius: 2px;
  border: solid 1px var(--greyish);
`     

export const ButtonStyled = styled.button` 
  cursor: pointer;
  margin-top: 8px;
  position: relative;
  border: 2px solid #5cb646;
  transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
  outline: none;  
  width: 328px;
  height: 42px;
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