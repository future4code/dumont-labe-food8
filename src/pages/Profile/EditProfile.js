import React from 'react';
import { SaveButton, FormContainer, TextFieldStyled, Container } from "./stylesProfile"
import { updateProfile } from '../../services/user'
import useProtectedPage from '../../hooks/useProtectedPage';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export default function EditProfile() {
  useProtectedPage()
  const { form, onChange } = useForm({ name: "", email: "", cpf: "" })

  const handleInput = (event) => {
    const { value, name } = event.target
    onChange(value, name)
  }

  const handleSubmission = (event) => {
    updateProfile(form)
    console.log("updateProfile", updateProfile)
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
          onChange={handleInput}
          style={{ margin: '8px 0' }}
          required>

        </TextFieldStyled>

        <TextFieldStyled
          id="outlined-basic"
          label="E-mail"
          type="email"
          variant="outlined"
          name="email"
          onChange={handleInput}
          style={{ margin: '8px 0' }}
          required>
        </TextFieldStyled>

        <TextFieldStyled
          id="outlined-basic"
          label="CPF Somente números"
          variant="outlined"
          name="cpf"
          onChange={handleInput}
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
