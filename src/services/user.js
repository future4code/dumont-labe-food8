/*Serviços*/
import api from './api';

/*Coordenador de rotas */
import { goToHome } from "../routes/coordinator";

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
    goToHome(history)
    console.log("foi")
  }).catch(error => {
    alert("Please, check the filled fields!")
    console.log(error.message, "ruim")
  })
}
