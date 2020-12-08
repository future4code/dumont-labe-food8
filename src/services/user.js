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

export const axiosAuth = {
  headers: {
      auth: localStorage.getItem("token")
  }
}

export const adress = (body, axiosAuth, history) => {
  api.put('/address', body, axiosAuth).then(response => {
    localStorage.removeItem("token")
    localStorage.setItem("token", response.data.token)
    goToHome(history)
    console.log("foi")
  }).catch(error => {
    alert("Please, check the filled fields!")
    console.log(error.message, "ruim")
  })
}
