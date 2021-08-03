import React, { useState } from 'react';
import { SaveButton, FormContainer, TextFieldStyled, Container } from "./stylesProfile"
import useProtectedPage from '../../hooks/useProtectedPage';
import { useForm } from '../../hooks/useForm';
import { updateProfile } from '../../services/user';
import CpfMask from '../../components/CpfMask'

export default function EditProfile(props) {
  useProtectedPage()
  const { form, onChange } = useForm({ name: "", email: ""})
  const [cpf, setCpf] = useState("")

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
          placeholder="Nome"
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
          placeholder="Email"
          onChange={onChange}
          style={{ margin: '8px 0' }}
          required>
        </TextFieldStyled>

        <CpfMask cpf={cpf} setCpf={setCpf}/> 
        <SaveButton>Salvar</SaveButton>

      </FormContainer>

    </Container>
  );
}
