import React, { useEffect, useState } from 'react';
import { MainContainer, CardContainer } from './styles'
import SearchField from '../../components/SearchField'
import RestaurantCard from '../../components/RestaurantCard'
import Filter from '../../components/Filter'
import useProtectedPage from '../../hooks/useProtectedPage'
import axios from "axios"

export default function HomePage() {
  const [restaurants, setRestaurants] = useState(undefined)
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  useProtectedPage()

  useEffect (() => {
    getRestaurants()
  }, [] )

  const getRestaurants = () => {
         axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants', {
          headers: {
           auth: localStorage.getItem("token")
          }
        }).then((res) => {
        setRestaurants(res.data)
        setFilteredRestaurants(res.data.restaurants)
        console.log(res.data.restaurants)})
      .catch(err => {console.log(err.message)})
  }

  return (
    <MainContainer>
        <SearchField setSearch={setFilteredRestaurants} allRestaurants={restaurants} />
        <Filter/>
        <CardContainer>
        { console.log(filteredRestaurants) }
        
        
        { filteredRestaurants.length === 0 ? <p> Restaurante não encontrado </p> :

          restaurants && (filteredRestaurants.map((item) => {  
            
                return (
                    <RestaurantCard
                    key={item.id}
                    name={item.name}
                    deliveryTime={item.deliveryTime}
                    shipping={item.shipping}
                    image= {<img src={item.logoUrl} alt="logo restaurante"/>} 
                    />
                )}) )
        }
        
       </CardContainer>
    </MainContainer>
  )
}