import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { address } from '../../services/user'
import { TextField } from '@material-ui/core'
import { FormContainer, Wrapper, ButtonStyled } from "../SignupPage/styles"
import { Title } from "./styles"
import useProtectedPage from '../../hooks/useProtectedPage'


export default function SignupPage() {
  window.document.title="FutureEats"
  useProtectedPage()
  const history = useHistory()

  const { form, onChange } = useForm({ street: "", number: "", complement: "", neighbourhood: "", city: "", state: "" })

  const handleSubmission = (event) => {
    event.preventDefault()
    address(form, history)
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
          onChange={onChange}
          style={{ margin: '8px 0' }}
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
          onChange={onChange}
          style={{ margin: '8px 0' }}
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
          onChange={onChange}
          style={{ margin: '8px 0' }}
        />
        <TextField
          variant="outlined"
          size="small"
          label="Bairro"
          value={form.neighbourhood}
          type="text"
          name="neighbourhood"
          placeholder="Bairro"
          onChange={onChange}
          style={{ margin: '8px 0' }}
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
          onChange={onChange}
          style={{ margin: '8px 0' }}
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
          onChange={onChange}
          style={{ margin: '8px 0' }}
          required
        />

        <ButtonStyled>Salvar</ButtonStyled>
      </FormContainer>

    </Wrapper>
  )
}