import React, { useState } from 'react';
import { BoxAdress, BoxInline, NewAdress, Box, IconEdit, Subtotal, Date, Container, Name, Phone, Retangle, RegisteredAdress, Email, OrderHistory, Line, RestaurantBox, ContainerOrder, Restaurant } from "./styles"
import iconEdit from "../../assets/icons/edit.svg"
import EditProfile from "./EditProfile"
import { useHistory, useParams } from 'react-router-dom';
import { goToAdressPage } from '../../routes/coordinator';


export default function Profile() {
  const [page, setPage] = useState(false)
  const history = useHistory()

  const changePage = () => {
    setPage(true)
  }

  return (
    <React.Fragment>
      {page ? <EditProfile /> :
        <Container>
          <BoxInline>
            <Box>
              <Name>Nome estático</Name>
              <Email>E-mail estático</Email>
              <Phone>telefone estático 00000</Phone>
            </Box>
            <IconEdit onClick={changePage} src={iconEdit} />
            {console.log("onClick", page)}
          </BoxInline>

          <Retangle>
            <BoxAdress>
              <RegisteredAdress>Endereço cadastrado</RegisteredAdress>
              <NewAdress>Rua blablabla, 52</NewAdress>
            </BoxAdress>
            <IconEdit onClick={()=>goToAdressPage(history)} src={iconEdit} />
          </Retangle>

          <OrderHistory>Histórico de pedidos</OrderHistory>
          <ContainerOrder>
            <Line></Line>
            <RestaurantBox>
              <Restaurant>Bulguer Vila Mada</Restaurant>
              <Date>23 de outubro de 2019</Date>
              <Subtotal>Bulguer Vila Mada</Subtotal>
            </RestaurantBox>
          </ContainerOrder>
        </Container>
      }
    </React.Fragment>
  );
}