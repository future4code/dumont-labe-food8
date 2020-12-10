import React, { useEffect, useState } from 'react';
import { BoxAdress, BoxInline, NewAdress, Box, IconEdit, Subtotal, Date, Container, Name, Cpf, Retangle, RegisteredAdress, Email, OrderHistory, Line, RestaurantBox, ContainerOrder, Restaurant } from "./styles"
import iconEdit from "../../assets/icons/edit.svg"
import EditProfile from "./EditProfile"
import { useHistory } from 'react-router-dom';
import { goToAdressPage } from '../../routes/coordinator';
import { getProfile } from '../../services/user';
import useProtectedPage from '../../hooks/useProtectedPage';


export default function Profile() {
  const [page, setPage] = useState(false)
  const [profile, setProfile] = useState({})

  const history = useHistory()
  useProtectedPage()

  const changePage = () => {
    setPage(true)
  }

  useEffect(() => {
    getProfile(setProfile)
  }, [])

  return (
    <React.Fragment>
      {page ? <EditProfile /> :
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
              <NewAdress>Rua blablabla, 52</NewAdress>
            </BoxAdress>
            <IconEdit onClick={() => goToAdressPage(history)} src={iconEdit} />
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