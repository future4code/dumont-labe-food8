/*Serviços*/
import api from './api';

/*Coordenador de rotas */
import { goToHome, goToAdressPage } from "../routes/coordinator";

export const login = (body, history) => {
  api.post('/login', body).then(response => {
    localStorage.setItem("token", response.data.token)
    goToHome(history)
  }).catch(error => {
    alert("Invalid email and/or password!")
    console.log(error.message)
  })
}

export const signup = (body, history) => {
  api.post('/signup', body).then(response => {
    localStorage.setItem("token", response.data.token)
    goToAdressPage(history)
    console.log("foi")
  }).catch(error => {
    alert("Please, check the filled fields!")
    console.log(error.message, "ruim")
  })
}

export const updateProfile = (body) => {
  api.put('/profile', body).then(response => {
    localStorage.setItem("token", response.data.token)
    alert("Cadastro atualizado")
  }).catch(error => {
    alert("ruim no updateProfile")
    console.log(error.message, "ruim no updateProfile")
  })
}

export const axiosAuth = {
  headers: {
    auth: localStorage.getItem("token")
  }
}


export const address = (body, axiosAuth, history) => {
  console.log("body", body)
  console.log("axiosAuth", axiosAuth)

  api.put('/address', body, {
    headers: {
      auth: localStorage.getItem("token")
    }
  }
  ).then(response => {
    // localStorage.removeItem("token")
    localStorage.setItem("token", response.data.token)

    goToHome(history)
    console.log("foi")
  }).catch(error => {
    alert("Please, check the filled fields!")
    console.log(error.message, "ruim")
  })
}
