/*Serviços*/
import api from './api';

/*Coordenador de rotas */
import { goToProfile, goToHome, goToAdressPage } from "../routes/coordinator";

export const login = (body, history) => {
  api.post('/login', body).then(response => {
    localStorage.setItem("token", response.data.token)
    goToHome(history)
  }).catch(error => {
    alert("Email e/ou senha inválidos!")
    console.log(error.message)
  })
}

export const signup = (body, history) => {
  api.post('/signup', body)
  .then(response => {
    localStorage.setItem("token", response.data.token)
    goToAdressPage(history)
  }).catch(error => {
    alert("Por favor, confirme seus dados!")
    console.log(error.message)
  })
}

export const updateProfile = (body, history) => {
  api.put('/profile', body, {
    headers: {
      auth: localStorage.getItem("token")
    }
  }).then(response => {
    alert("Cadastro atualizado")
    goToProfile(history)
    
  }).catch(error => {
    alert("Erro na atualização do cadastro")
    console.log(error.message)
  })
}

export const getProfile = (setProfile) => {
  console.log("setProfile", setProfile)
  api.get('/profile', {
    headers: {
      auth: localStorage.getItem("token")
    }
  })
  .then(response => {
    setProfile(response.data.user)
    
  }).catch(error => {
    console.log(error.message)
  })
}

export const address = (body, history) => {

  api.put('/address', body, {
    headers: {
      auth: localStorage.getItem("token")
    }
  }
  ).then(response => {
    localStorage.setItem("token", response.data.token)
    goToHome(history)
  }).catch(error => {
    alert("Confirme seus dados, por favor!")
    console.log(error.message)
  })
}
