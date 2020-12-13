import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { signup } from '../../services/user'
import { InputLabel, IconButton, InputAdornment, OutlinedInput, FormControl, TextField } from '@material-ui/core'
import { Visibility, VisibilityOff } from "@material-ui/icons"
import logo from "../../assets/img/small-logo.png"
import { ImageLogo, Register, FormContainer, Wrapper, ButtonStyled } from "./styles"
import CpfMask from '../../components/CpfMask'


export default function SignupPage() {
  const history = useHistory()
  const { form, onChange } = useForm({ name: "", email: "",  password: "", confirmPassword: "" })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [cpf, setCpf] = useState("")
 
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
          placeholder="Qual seu nome?"
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
          placeholder="Qual seu email?"
          onChange={onChange}
          required
          style={{ margin: '8px 0' }}
        />
        {/* <TextField
          variant="outlined"
          size="small"
          label="E-mail"
          value={form.cpf}
          type="cpf"
          name="cpf"
          placeholder="Apenas números"
          onChange={onChange}
          required
          style={{ margin: '8px 0' }}
        /> */}
        <CpfMask cpf={cpf} setCpf={setCpf}/> 
        <FormControl variant="outlined" required="true" style={{ margin: '8px 0' }}>
          <InputLabel htmlFor="outlined-adornment-password" margin="dense">Senha</InputLabel>
          <OutlinedInput
            margin="dense"
            label="Senha"
            value={form.password}
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Mínimo seis digitos"
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