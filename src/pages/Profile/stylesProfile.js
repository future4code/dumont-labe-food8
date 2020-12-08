import styled from "styled-components"
import TextField from '@material-ui/core/TextField';

export const Container = styled.div`
    width: 100vw;
    min-height:100vh;
    max-width: 414px;  
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    height: 40vh;
`
export const TextFieldStyled = styled(TextField)`
  width: 328px;
  height: 56px;
  margin: 8px 0 0;
  padding: 19px 48px 19px 16px;
`
export const SaveButton = styled.button`
  margin: 16px 0 0;
  width: 328px;
  height: 42px;
  font-family: Roboto;
  letter-spacing: -0.39px;
  font-size: 16px;
  padding: 12px 16px;
  border:none;
  border-radius: 2px;
  background-color: #5cb646;
  `
