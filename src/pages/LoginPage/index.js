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
import { FormControl, TextField } from '@material-ui/core'
import { Wrapper, FormContainer } from "./styles"
import useUnProtectedPage from '../../hooks/useUnProtectedPage'

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
  }

  return (
    <Wrapper>
      <img src={null}/>
      <p>Entrar</p>
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
        />
        <FormControl variant="outlined" required="true" >
        <InputLabel htmlFor="outlined-adornment-password" margin="dense" >Senha</InputLabel>
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
      <button>Entrar</button>
      </FormContainer>
      <button>Não possui cadastro? Clique aqui.</button>
    </Wrapper>
  )
}