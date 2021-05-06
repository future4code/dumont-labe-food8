import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { login } from '../../services/user'
import {InputLabel, IconButton, InputAdornment, OutlinedInput, Button, FormControl, TextField} from '@material-ui/core'
import {Visibility, VisibilityOff} from "@material-ui/icons"
import { Wrapper, FormContainer, Login } from "./styles"
import useUnProtectedPage from '../../hooks/useUnProtectedPage'
import { goToSignUp } from '../../routes/coordinator'
import logo from "../../assets/img/small-logo.png"
import { ImageLogo, ButtonStyled } from '../SignupPage/styles'

export default function LoginPage() {
  window.document.title="FutureEats"
  useUnProtectedPage()
  const history = useHistory()
  const {form, onChange} = useForm({email: "", password:""})
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const handleSubmission = (event) => {
    event.preventDefault()
    login(form, history)
  }

  return (
    <Wrapper>
      <ImageLogo src={logo} alt="logo-future-eats"/>
      <Login>Entrar</Login>
      <FormContainer onSubmit={handleSubmission}>
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
          style={{margin:'8px 0'}}
        />
        <FormControl variant="outlined" required="true" style={{margin:'8px 0'}}>
        <InputLabel htmlFor="outlined-adornment-password" margin="dense">Senha</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          margin="dense"
          label="Senha "
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
              {showPassword ? <Visibility/> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          />
        </FormControl>
      <ButtonStyled>Entrar</ButtonStyled>
      </FormContainer>
      
      <Button onClick={() => {goToSignUp(history)}} style={{margin:'8px 0'}}>Não possui cadastro? Clique aqui.</Button>
    </Wrapper>
  )
}