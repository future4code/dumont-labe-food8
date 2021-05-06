import styled from "styled-components"
import React from 'react';
import { Route, useHistory } from 'react-router-dom';

/*Material UI*/
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

/*Cordenador de rota*/
import { goBack } from '../../routes/coordinator';

const HeaderContainer = styled.header`
     width: 100%;
     display: grid;
     grid-template-columns: 50px 1fr;
     grid-template-rows: 1fr;
`

const Bar = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     width: 100%;
     height: 50px;
     border-bottom: 1px solid #b8b8b8;
     background-color: #ffffff; 
     text-align: center;
`;

const Title = styled.div`
     display: flex;
     justify-content: stretch;
     align-items: center;
     margin-right: 50px;
     height: 44px;
     text-align: center;
     height: 19px;
     font-size: 16px;
     font-weight: bold;
     letter-spacing: -0.39px;
     text-align: center;
     color: #000000;  
`;

export default function Header() {
     const history = useHistory()

     return (
          <HeaderContainer>
               <Bar>
                    <Route exact path={['/cadastro', '/restaurante/:id', '/cadastro/endereco', '/carrinho']}>
                         <ArrowBackIosIcon size={24} onClick={() => goBack(history)} />
                    </Route>
               </Bar>

               <Bar>
                    <Route exact path={['/entrar', 'cadastrar', '/cadastro/endereco']}>
                         <Title></Title>
                    </Route>
                    <Route exact path={'/home'}>
                         <Title>FutureEats</Title>
                    </Route>
                    <Route exact path={'/restaurante/:id'}>
                         <Title>Restaurante</Title>
                    </Route>
                    <Route exact path={'/carrinho'}>
                         <Title>Carrinho</Title>
                    </Route>
                    <Route exact path={'/perfil'}>
                         <Title>Perfil</Title>
                    </Route>
               </Bar>
          </HeaderContainer>

     );
}