import React from 'react';
import { SaveButton, FormContainer, TextFieldStyled, Container } from "./stylesProfile"
import Header from "../../components/Header"

export default function EditProfile() {

  return (
    <Container>
      {/* <Header></Header> */}
      <FormContainer>

        <TextFieldStyled
          id="outlined-basic"
          label="Nome"
          variant="outlined">
        </TextFieldStyled>

        <TextFieldStyled
          id="outlined-basic"
          label="E-mail"
          variant="outlined">
        </TextFieldStyled>

        <TextFieldStyled
          id="outlined-basic"
          label="CPF"
          variant="outlined">
        </TextFieldStyled>

        <SaveButton>Salvar</SaveButton>
      </FormContainer>

    </Container>
  );
}
