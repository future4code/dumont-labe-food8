/*Serviços*/
import api from './api'

export const restaurants = () => {
    api.get('/restaurants', {
        headers: {
          auth: localStorage.getItem("token")
        }
      }).then((res) => {console.log(res)})
    .catch(err => {console.log(err.message)})
}

