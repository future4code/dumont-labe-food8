import React, { useEffect, useState } from 'react';
import { BoxAdress, BoxInline, NewAdress, Box, IconEdit, Subtotal, Date, Container, Name, Cpf, Retangle, RegisteredAdress, Email, OrderHistory, Line, RestaurantBox, ContainerOrder, Restaurant } from "./styles"
import iconEdit from "../../assets/icons/edit.svg"
import EditProfile from "./EditProfile"
import { useHistory } from 'react-router-dom';
import { goToAdressPage } from '../../routes/coordinator';
import { getAddress, getOrderHistory, getProfile } from '../../services/user';
import useProtectedPage from '../../hooks/useProtectedPage';


export default function Profile() {
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

            {orders.length > 0 ? orders.map((order) => {
              return (
                <RestaurantBox>
                  <Restaurant>{order.restaurant.name}</Restaurant>
                  <Date>{order.date}</Date>
                  <Subtotal>{order.price}</Subtotal>
                </RestaurantBox>
              )
            }) : <p>Você não realizou nenhum pedido =/</p>}


          </ContainerOrder>
        </Container>
      }
    </React.Fragment>
  );
}