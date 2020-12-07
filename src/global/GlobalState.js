import React, { useState } from "react";

/*Serviços*/
import api from '../services/api';

/*Context*/
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  /*Aqui vai o state global */
  

  /*Aqui vai a requisição global */

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