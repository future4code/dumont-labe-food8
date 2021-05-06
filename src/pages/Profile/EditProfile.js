import React, { useState } from 'react';
import { SaveButton, FormContainer, TextFieldStyled, Container } from "./stylesProfile"
import useProtectedPage from '../../hooks/useProtectedPage';
import { useForm } from '../../hooks/useForm';
import { updateProfile } from '../../services/user';

export default function EditProfile(props) {
  useProtectedPage()
  const { form, onChange } = useForm({ name: "", email: "", cpf: "" })

  const handleSubmission = (event) => {  
    event.preventDefault()  
    updateProfile(form)     
    props.setPage(false)  
  }

  return (
    <Container>
      <FormContainer onSubmit={handleSubmission}>

        <TextFieldStyled
          id="outlined-basic"
          label="Nome"
          type="text"
          variant="outlined"
          name="name"
          onChange={onChange}
          style={{ margin: '8px 0' }}
          required>

        </TextFieldStyled>

        <TextFieldStyled
          id="outlined-basic"
          label="E-mail"
          type="email"
          variant="outlined"
          name="email"
          onChange={onChange}
          style={{ margin: '8px 0' }}
          required>
        </TextFieldStyled>

        <TextFieldStyled
          id="outlined-basic"
          label="CPF"
          placeholder= "Somente números"
          variant="outlined"
          name="cpf"
          onChange={onChange}
          style={{ margin: '8px 0' }}
          pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
          required
        >
        </TextFieldStyled>
        <SaveButton>Salvar</SaveButton>

      </FormContainer>

    </Container>
  );
}
