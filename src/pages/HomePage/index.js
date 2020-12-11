import React, { useEffect, useState } from 'react';
import { MainContainer, CardContainer, NoResultsContainer, NoResults } from './styles'
import SearchField from '../../components/SearchField'
import RestaurantCard from '../../components/RestaurantCard'
import Filter from '../../components/Filter'
import useProtectedPage from '../../hooks/useProtectedPage'
import axios from "axios"

/*Componentes */
import Loading from '../../components/Loading';


export default function HomePage() {
  useProtectedPage()
  window.document.title = "FutureEats"
  const [restaurants, setRestaurants] = useState(undefined)
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [categoryFilter, setCategoryFilter] = useState(undefined)

  useEffect(() => {
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
    </MainContainer>
  )
}