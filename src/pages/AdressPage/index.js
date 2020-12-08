import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { adress, axiosAuth } from '../../services/user'
import { TextField } from '@material-ui/core'
import { FormContainer, Wrapper, ButtonStyled } from "../SignupPage/styles"
import { Title } from "./styles"
import useProtectedPage from '../../hooks/useProtectedPage'


export default function SignupPage() {
  useProtectedPage()
  const history = useHistory()
  const {form, onChange} = useForm({street: "", number: "", complement:"", neighbourhood:"", city: "", state: ""})
  
  const handleInput = (event) => {
    const {value, name} = event.target
    onChange(value, name)
  }

  const handleSubmission = (event) => {
    event.preventDefault()
    adress(form, axiosAuth, history)
  }

   return (
    <Wrapper>
    
    <Title>Meu endereço</Title>
    
    <FormContainer onSubmit={handleSubmission}>
      <TextField
          variant="outlined"
          size="small"
          label="Rua"
          value={form.street}
          type="text"
          name="street"
          placeholder="Rua"
          onChange={handleInput}
          style={{margin:'8px 0'}}
          required
        />
        <TextField
          variant="outlined"
          size="small"
          label="Número"
          value={form.number}
          type="text"
          name="number"
          placeholder="Número"
          onChange={handleInput}
          style={{margin:'8px 0'}}
          required
        />
        <TextField
          variant="outlined"
          size="small"
          label="Complemento"
          value={form.complement}
          type="text"
          name="complement"
          placeholder="Complemento"
          onChange={handleInput}
          style={{margin:'8px 0'}}
        />
         <TextField
          variant="outlined"
          size="small"
          label="Bairro"
          value={form.neighbourhood}
          type="text"
          name="neighbourhood"
          placeholder="Bairro"
          onChange={handleInput}
          style={{margin:'8px 0'}}
          required
        />
        <TextField
          variant="outlined"
          size="small"
          label="Cidade"
          value={form.city}
          type="text"
          name="city"
          placeholder="Cidade"
          onChange={handleInput}
          style={{margin:'8px 0'}}
          required
        />
         <TextField
          variant="outlined"
          size="small"
          label="Estado"
          value={form.state}
          type="text"
          name="state"
          placeholder="Estado"
          onChange={handleInput}
          style={{margin:'8px 0'}}
          required
        />
        
    <ButtonStyled>SALVAR</ButtonStyled>
    </FormContainer>
      
    </Wrapper>
  )
}