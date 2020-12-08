import React from 'react';
import { SaveButton, FormContainer, TextFieldStyled, Container } from "./stylesProfile"

export default function EditProfile() {

  return (
    <Container>
      <FormContainer>

        <TextFieldStyled
          id="outlined-basic"
          label="Nome"
          type="text"
          variant="outlined"
          style={{margin:'8px 0'}}
          required>
            
        </TextFieldStyled>

        <TextFieldStyled
          id="outlined-basic"
          label="E-mail"
          type="email"
          variant="outlined"
          style={{margin:'8px 0'}}
          required>
        </TextFieldStyled>

        <TextFieldStyled
          id="outlined-basic"
          label="CPF Somente números"
          variant="outlined"
          style={{margin:'8px 0'}}
          pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
          required
          >
        </TextFieldStyled>

        <SaveButton>Salvar</SaveButton>
      </FormContainer>

    </Container>
  );
}
