import React, { useEffect, useState } from 'react';
// import {useParams} from 'react-router-dom';

// import api from '../../services/api';

/*Components*/
import FoodInformationCard from '../../components/FoodInformationCard';

/*Tags styleds*/
import {
  RestaurantDetailsContainer,
  CardRestaurantDetails,
  ImgContainer,
  ImgRestaurantDetails,
  Restaurant,
  DeliveryTimeAndFreightContainer,
  GrayTexts,
  ItemsContainer,
  TitleOfContainers,
  TitleBorder
} from './styles';

export default function RestaurantDetails() {
  // const { id } = useParams();
  // const token = localStorage.getItem('token')
  // const [infosRestaurant, setInfosRestaurant] = useState({})

  // useEffect(() => {
  //     api.get(`/restaurants/${id}`, {
  //       headers: {
  //         auth: token
  //       }
  //     }).then((res) => {
  //       setInfosRestaurant(res.data)
  //     }).catch((error) => {
  //       console.log(error.message)
  //     })

  // }, [id, token])



  return (
    <RestaurantDetailsContainer>
      <CardRestaurantDetails>
        <ImgContainer>
          <ImgRestaurantDetails src={'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'} />
        </ImgContainer>
        <Restaurant>Bullquer Vila Madalena</Restaurant>
        <GrayTexts>Burger</GrayTexts>

        <DeliveryTimeAndFreightContainer>
          <GrayTexts>50 - 60 min</GrayTexts>
          <GrayTexts>Entrega R$6,00</GrayTexts>
        </DeliveryTimeAndFreightContainer>

        <GrayTexts>R. Fradique Coutinho, 1136 - Vila Madalena</GrayTexts>
      </CardRestaurantDetails>

      <ItemsContainer>
        <TitleOfContainers>Principais</TitleOfContainers>
        <TitleBorder />

        <FoodInformationCard />
        <FoodInformationCard />
 
      </ItemsContainer>

      <ItemsContainer>
        <TitleOfContainers>Acompanhamentos</TitleOfContainers>
        <TitleBorder />

        <FoodInformationCard />
        <FoodInformationCard />
      </ItemsContainer>
    </RestaurantDetailsContainer>
  )
}