import React, { useState } from "react";

// /*Serviços*/
import api from '../services/api';

/*Context*/
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  /*Aqui vai o state global */
  // const [profile, setProfile] = useState({});
  // console.log("profile", profile)

  /*Aqui vai a requisição global */
  //  const updateProfile = (body) => {
  //   api.put('/profile', body)
  //   .then((response) => {
  //     localStorage.setItem("token", response.data.token)
  //     setProfile(response.data.user)
  //     alert("Cadastro atualizado")
      
  //   }).catch(error => {
  //     console.log(error.message, "ruim no updateProfile")
  //   })
  // }
  

  const states = {  };
  const setters = {  };
  const requests = {  };

  const data = { states, setters, requests };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;