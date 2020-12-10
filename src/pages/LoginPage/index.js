import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { login } from '../../services/user'
import InputLabel from '@material-ui/core/InputLabel'
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import { Button, FormControl, TextField } from '@material-ui/core'
import { Wrapper, FormContainer, Login } from "./styles"
import useUnProtectedPage from '../../hooks/useUnProtectedPage'
import { goToSignUp } from '../../routes/coordinator'
import logo from "../../assets/img/small-logo.png"
import { ImageLogo } from '../SignupPage/styles'
import { ButtonStyled } from "../SignupPage/styles"

export default function LoginPage() {
  useUnProtectedPage()
  const history = useHistory()
  const {form, onChange} = useForm({email: "", password:""})
  const [showPassword, setShowPassword] = useState(false)

  const handleInput = (event) => {
    const {value, name} = event.target
    onChange(value, name)
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const handleSubmission = (event) => {
    event.preventDefault()
    login(form, history)
    console.log("handleSubmission")
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
          onChange={handleInput}
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
          onChange={handleInput}
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
      <ButtonStyled>ENTRAR</ButtonStyled>
      </FormContainer>
      
      <Button onClick={() => {goToSignUp(history)}} style={{margin:'8px 0'}}>Não possui cadastro? Clique aqui.</Button>
    </Wrapper>
  )
}