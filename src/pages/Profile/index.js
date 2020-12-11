import React, { useEffect, useState } from 'react';
import { BoxAdress, BoxInline, NewAdress, Box, IconEdit, Subtotal, Date, Container, Name, Cpf, Retangle, RegisteredAdress, Email, OrderHistory, Line, RestaurantBox, ContainerOrder, Restaurant } from "./styles"
import iconEdit from "../../assets/icons/edit.svg"
import EditProfile from "./EditProfile"
import { useHistory } from 'react-router-dom';
import { goToAdressPage } from '../../routes/coordinator';
import { getAddress, getOrderHistory, getProfile } from '../../services/user';
import useProtectedPage from '../../hooks/useProtectedPage';
import { formatDate } from '../../utilities/utilities';

import Loading from '../../components/Loading';


export default function Profile() {
  window.document.title = "FutureEats"
  const [page, setPage] = useState(false)
  const [profile, setProfile] = useState({})
  const [userAddress, setUserAddress] = useState(undefined)
  const [orders, setOrders] = useState([])

  const history = useHistory()
  useProtectedPage()

  const changePage = () => {
    setPage(true)
  }

  useEffect(() => {
    getOrderHistory(setOrders)
    getProfile(setProfile)
    getAddress(setUserAddress)
  }, [page])



  return (
    <React.Fragment>
      {page ? <EditProfile setPage={setPage} /> :
        <Container>
          <BoxInline>
            <Box>
              <Name>{profile.name}</Name>
              <Email>{profile.email}</Email>
              <Cpf>{profile.cpf}</Cpf>
            </Box>
            <IconEdit onClick={changePage} src={iconEdit} />
          </BoxInline>

          <Retangle>
            <BoxAdress>
              <RegisteredAdress>Endereço cadastrado</RegisteredAdress>
              <NewAdress>
                {userAddress ?
                  <p>{`${userAddress.street}, ${userAddress.number} - ${userAddress.neighbourhood}`}</p>
                  : <p>Buscando seu endereço..</p>
                }
              </NewAdress>
            </BoxAdress>
            <IconEdit onClick={() => goToAdressPage(history)} src={iconEdit} />
          </Retangle>

          <OrderHistory>Histórico de pedidos</OrderHistory>
          <ContainerOrder>
            <Line></Line>

            {orders.length === 0 ? <Loading /> :
              orders.map((order) => {
                if (order.restaurantName === "NotFound") {
                  return <p>Você não realizou nenhum pedido =/</p>
                }
                return (
                  <RestaurantBox>
                    <Restaurant>{order.restaurantName}</Restaurant>
                    <Date>{formatDate(order.expiresAt)}</Date>
                    <Subtotal>
                      {`SUBTOTAL ${new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(order.totalPrice)}`}
                    </Subtotal>
                  </RestaurantBox>
                )
              })}
          </ContainerOrder>
        </Container>
      }
    </React.Fragment>
  );
}