import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { signup } from '../../services/user'
import { InputLabel, IconButton, InputAdornment, OutlinedInput, FormControl, TextField } from '@material-ui/core'
import { Visibility, VisibilityOff } from "@material-ui/icons"
// import CpfCnpj from "@react-br-forms/cpf-cnpj-mask"
import logo from "../../assets/img/small-logo.png"
import { ImageLogo, Register, FormContainer, Wrapper, ButtonStyled } from "./styles"


export default function SignupPage() {
  const history = useHistory()
  const { form, onChange } = useForm({ name: "", email: "", cpf: "", password: "", confirmPassword: "" })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  /* para validar as duas senhas */
  const validate = (event) => {
    const passwordOne = form.password
    const passwordTwo = form.confirmPassword
    event.preventDefault()
    if (passwordOne === passwordTwo) {
      signup(form, history)
    } else {
      alert("Por favor, confira sua senha")
    }
  }

  return (
    <Wrapper>

      <ImageLogo src={logo} alt="logo-future-eats" />
      <Register>Cadastrar</Register>

      <FormContainer onSubmit={validate}>
        <TextField
          variant="outlined"
          size="small"
          label="Nome"
          value={form.name}
          type="text"
          name="name"
          placeholder="Nome"
          onChange={onChange}
          required
          style={{ margin: '8px 0' }}
        />
        <TextField
          variant="outlined"
          size="small"
          label="E-mail"
          value={form.email}
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={onChange}
          required
          style={{ margin: '8px 0' }}
        />

        <TextField
          variant="outlined"
          size="small"
          label="CPF"
          value={form.cpf}
          type="tel"
          name="cpf"
          placeholder="Somente números"
          pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
          onChange={onChange}
          required
          style={{ margin: '8px 0' }}
        />

        <FormControl variant="outlined" required="true" style={{ margin: '8px 0' }}>
          <InputLabel htmlFor="outlined-adornment-password" margin="dense">Senha</InputLabel>
          <OutlinedInput
            margin="dense"
            label="Senha"
            value={form.password}
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Senha"
            onChange={onChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl variant="outlined" required="true" style={{ margin: '8px 0' }}>
          <InputLabel htmlFor="outlined-adornment-password" margin="dense">Confirmar</InputLabel>
          <OutlinedInput
            margin="dense"
            label="Confirmar"
            value={form.confirmPassword}
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirme a senha"
            onChange={onChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />

        </FormControl>
        <ButtonStyled>Criar</ButtonStyled>
      </FormContainer>


    </Wrapper>
  );
}