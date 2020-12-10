import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { signup } from '../../services/user'
import InputLabel from '@material-ui/core/InputLabel'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import { FormControl, TextField } from '@material-ui/core'
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask"
import logo from "../../assets/img/small-logo.png"
import { ImageLogo, Register, FormContainer, Wrapper, ButtonStyled } from "./styles"


export default function SignupPage() {
  const history = useHistory()
  const {form, onChange} = useForm({name: "", email: "", cpf: "", password:"", confirmPassword: ""})
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  //const [cpfCnpj, setCpfCnpj] = useState("")
  //const [mask, setMask] = useState("");

  const handleInput = (event) => {
    const {value, name} = event.target
    onChange(value, name)
  } 

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const handleSubmission = (event) => {
    signup(form, history)
  }


  /* para validar as duas senhas */
  const validate = (event) => {
    const passwordOne = form.password
    const passwordTwo = form.confirmPassword
    event.preventDefault()
    if(passwordOne === passwordTwo) {
      handleSubmission()
    } else {
      alert("Please, check your password")
    }
  }
  
  return (
    <Wrapper>
    
    <ImageLogo src={logo} alt="logo-future-eats"/>
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
          onChange={handleInput}
          required
          style={{margin:'8px 0'}}
        />
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
        
         {/* <CpfCnpj
          value={cpfCnpj}
          onChange={(ev, type) => {
           setCpfCnpj(ev.target.value);
           setMask(type === "CPF");
         }}> */}
           {() => <TextField
          variant="outlined"
          size="small"
          label="CPF"
          value={form.cpf}
          type="tel"
          name="cpf"
          placeholder="Somente números"
          pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
          onChange={handleInput}
          required
          style={{margin:'8px 0'}}
          />}
                 
            {/* </CpfCnpj>  */}
        
        
        
        
        <FormControl variant="outlined" required="true" style={{margin:'8px 0'}}>
        <InputLabel htmlFor="outlined-adornment-password" margin="dense">Senha</InputLabel>
        <OutlinedInput
          //id="outlined-adornment-password"
          margin="dense"
          label="Senha"
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
        <FormControl variant="outlined" required="true" style={{margin:'8px 0'}}>
        <InputLabel htmlFor="outlined-adornment-password" margin="dense">Confirmar</InputLabel>
        <OutlinedInput
          //id="outlined-adornment-password"
          margin="dense"
          label="Confirmar"
          value={form.confirmPassword}
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirme a senha"
          onChange={handleInput}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowConfirmPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end" 
              >
              {showConfirmPassword ? <Visibility/> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
         
    </FormControl>
    <ButtonStyled>CRIAR</ButtonStyled>
    </FormContainer>
       
    
    </Wrapper>
  );
}