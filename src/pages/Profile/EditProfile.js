import React from 'react';
import { SaveButton, FormContainer, TextFieldStyled, Container } from "./stylesProfile"
import useProtectedPage from '../../hooks/useProtectedPage';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { updateProfile } from '../../services/user';

export default function EditProfile(props) {
  useProtectedPage()
  const { form, onChange } = useForm({ name: "", email: "", cpf: "" })
  const history = useHistory()

  const handleSubmission = (event) => {    
    updateProfile(form, history)     
    props.setPage(false)  
    event.preventDefault()
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
