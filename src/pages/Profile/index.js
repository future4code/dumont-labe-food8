import React from 'react';
import { NewAdress, Box, IconEdit, Subtotal, Date, Container, Name, Phone, Retangle, RegisteredAdress, Adress, OrderHistory, Line, RestaurantBox, ContainerOrder, Restaurant } from "./styles"
import Header from "../../constants/Header"
import iconEdit from "../../assets/icons/edit.svg"
export default function Profile() {

  return (
    <Container>
      <Header></Header>
      {/* <Box> */}
        <Name>Endereço de entrega</Name>
        <Adress>Rua blablabla, 52</Adress>
        <Phone>000000000</Phone>
        {/* <IconEdit src={iconEdit} /> */}

      {/* </Box> */}
      <Retangle>
        <div>
          <RegisteredAdress>Endereço cadastrado</RegisteredAdress>
          <NewAdress>Rua blablabla, 52</NewAdress>
        </div>
        {/* <IconEdit src={iconEdit} /> */}

        <OrderHistory>Histórico de pedidos</OrderHistory>
        <ContainerOrder>
          <Line></Line>
          <RestaurantBox>
            <Restaurant>Bulguer Vila Mada</Restaurant>
            <Date>23 de outubro de 2019</Date>
            <Subtotal>Bulguer Vila Mada</Subtotal>
          </RestaurantBox>
        </ContainerOrder>
      </Retangle>
    </Container>
  );
}