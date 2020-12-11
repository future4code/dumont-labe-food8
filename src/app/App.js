import { BrowserRouter, Route } from 'react-router-dom';
import Router from '../routes/Router';

/*Contexts*/
import GlobalState from "../global/GlobalState";

/*Tema*/
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../constants/theme';

import React from 'react';
import Header from '../components/Header';
import FooterNav from '../components/FooterNav';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <BrowserRouter>
          <Route exact path={['/cadastro', '/cadastro/endereco', '/home', '/carrinho', '/perfil']}>
            <Header />   
          </Route>       
          <Router />
          <FooterNav/>
        </BrowserRouter>
      </GlobalState>
    </ThemeProvider>
  );
}

