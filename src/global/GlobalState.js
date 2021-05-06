
import React, { useState } from "react";

/*Context*/
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {

  const [cart, setCart] = useState([])

  /*Aqui vai a requisição global */

  const states = { cart };
  const setters = { setCart };
  const requests = {};

  const data = { states, setters, requests };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;