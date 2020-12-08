import React, { useState } from 'react';
import { BoxAdress, BoxInline, NewAdress, Box, IconEdit, Subtotal, Date, Container, Name, Phone, Retangle, RegisteredAdress, Adress, OrderHistory, Line, RestaurantBox, ContainerOrder, Restaurant } from "./styles"
import Header from "../../constants/Header"
import iconEdit from "../../assets/icons/edit.svg"
import EditProfile from "./EditProfile"


export default function Profile() {
  const [page, setPage] = useState(false)

  const changePage = () => {
    setPage(true)
  }

  return (
    <React.Fragment>
      {page ? <EditProfile /> :
        <Container>
          {/* <Header></Header> */}
          <BoxInline>
            <Box>
              <Name>Endereço de entrega</Name>
              <Adress>Rua blablabla, 52</Adress>
              <Phone>000000000</Phone>
            </Box>
            <IconEdit onClick={changePage} src={iconEdit} />
            {console.log("onClick", page)}
          </BoxInline>

          <Retangle>
            <BoxAdress>
              <RegisteredAdress>Endereço cadastrado</RegisteredAdress>
              <NewAdress>Rua blablabla, 52</NewAdress>
            </BoxAdress>
            <IconEdit src={iconEdit} />
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