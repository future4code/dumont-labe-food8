import styled from "styled-components"
import React from 'react';
import { Route } from 'react-router-dom';

const Bar = styled.div`
     display: flex;
     justify-content:center;
     margin: 0px;
     align-items: center;
     width: 100%;
     height: 64px;
     -webkit-backdrop-filter: blur(10px);
     backdrop-filter: blur(10px);
     box-shadow: 0 0.5px 0 0 #b8b8b8;
     background-color: #ffffff; 
`;
const Title = styled.div`
     display: flex;
     justify-content:center;
     align-items: center;
     width: 175px;
     height: 44px;
     margin: 20px 92px 0 93px;
     padding: 13px 42px 12px;
     width: 91px;
     height: 19px;
     font-family: Roboto;
     font-size: 16px;
     font-weight: normal;
     font-stretch: normal;
     font-style: normal;
     line-height: normal;
     letter-spacing: -0.39px;
     text-align: center;
     color: #000000;  
`;

export default function Header() {
     return (
          <Bar>
               <Route exact path={'/login'}>
                    <Title>Login</Title>
               </Route>
               <Route exact path={'/signup'}>
                    <Title>Signup</Title>
               </Route>
               <Route exact path={'/home'}>
                    <Title>Home</Title>
               </Route>
               <Route exact path={'/restaurant/:id'}>
                    <Title>Restaurante</Title>
               </Route>
               <Route exact path={'/cart'}>
                    <Title>Carrinho</Title>
               </Route>
               <Route exact path={'/profile'}>
                    <Title>Perfil</Title>
               </Route>
          </Bar>
     );
}