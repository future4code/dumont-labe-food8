import { BrowserRouter } from 'react-router-dom';
import Router from '../routes/Router';

/*Contexts*/
import GlobalState from "../global/GlobalState";

/*Tema*/
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../constants/theme';

import React from 'react';
import Header from '../constants/Header';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <BrowserRouter>
          <Router>
            <Header/>
          </Router>
        </BrowserRouter>
      </GlobalState>
    </ThemeProvider>
  );
}

