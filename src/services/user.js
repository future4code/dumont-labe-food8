/*Serviços*/
import api from './api';

/*Coordenador de rotas */
import { goToHome, goToAdressPage } from "../routes/coordinator";

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

export const updateProfile = (body) => {
  api.put('/profile', body, {
    headers: {
      auth: localStorage.getItem("token")
    }
  }).then(() => {

  }).catch(error => {
    alert("Erro na atualização do cadastro")
    console.log(error.message)
  })
}

export const getOrderHistory = (setOrders) => {
  api.get('/orders/history', {
    headers: {
      auth: localStorage.getItem("token")
    }
  }).then(response => {
    setOrders(response.data.orders)

  }).catch(error => {
    console.log(error.message)
  })
}

export const getProfile = (setProfile) => {
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

export const getAddress = (setAddress) => {
  api.get('/profile/address', {
    headers: {
      auth: localStorage.getItem("token")
    }
  })
    .then(response => {
      setAddress(response.data.address)
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

export const placeOrder = (body, id) => {
  api.post(`/restaurants/${id}/order`, body, {
    headers: {
      auth: localStorage.getItem("token")
    }
  }).then(response => {
    console.log("funcionou")
  }).catch(error => {
    console.log(error.message)
  })
}