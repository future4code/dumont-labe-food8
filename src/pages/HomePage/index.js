import React, { useEffect, useState } from 'react';
import { MainContainer, CardContainer, NoResultsContainer, NoResults, SnackBar, Text, IconContainer, TextContainer, Subtotal } from './styles'
import SearchField from '../../components/SearchField'
import RestaurantCard from '../../components/RestaurantCard'
import Filter from '../../components/Filter'
import useProtectedPage from '../../hooks/useProtectedPage'
import axios from "axios"
import IconClock from "../../assets/img/clock.svg"
/*Componentes */
import Loading from '../../components/Loading';
import { activeOrder } from '../../services/user';


export default function HomePage() {
  useProtectedPage()
  window.document.title = "FutureEats"
  const [restaurants, setRestaurants] = useState(undefined)
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [categoryFilter, setCategoryFilter] = useState(undefined)
  const [order, setOrder] = useState(null)

  useEffect(() => {
    getOrder()
    getRestaurants()
  }, [])

  const getRestaurants = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants', {
      headers: {
        auth: localStorage.getItem("token")
      }
    }).then((res) => {
      setRestaurants(res.data)
      setFilteredRestaurants(res.data.restaurants)
    })
      .catch(err => { console.log(err.message) })
  }
  const getOrder = () => {
    activeOrder(setOrder)
  }

  return (
    <MainContainer>

      <SearchField setSearch={setFilteredRestaurants} allRestaurants={restaurants} categoryFilter={setCategoryFilter} />
      <Filter allRestaurants={restaurants} setCategory={setFilteredRestaurants} categoryFilter={setCategoryFilter} />

      <CardContainer>
        {filteredRestaurants.length === 0 ? <Loading /> :

          restaurants && (filteredRestaurants.map((item) => {
            if (item.id === "notFound") {
              return <NoResultsContainer key={item.id}>
                <NoResults>Não encontramos :(</NoResults>
              </NoResultsContainer>
            }
            return (
              <RestaurantCard
                key={item.id}
                id={item.id}
                name={item.name}
                deliveryTime={item.deliveryTime}
                shipping={item.shipping}
                image={<img src={item.logoUrl} alt="logo restaurante" />}
              />
            )
          }))
        }
      </CardContainer>
      {order &&
        <SnackBar>
          <IconContainer>
            <img src={IconClock} />
          </IconContainer>
          <TextContainer>
            <Text>Pedido em andamento</Text>
            {order.restaurantName}
            <Subtotal>{`SUBTOTAL
        ${new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(order.totalPrice)}`}
            </Subtotal>
          </TextContainer>
        </SnackBar>
      }
    </MainContainer>
  )
}
