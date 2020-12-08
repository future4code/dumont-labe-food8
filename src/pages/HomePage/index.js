import React from 'react';
import { MainContainer, Filtre, CardContainer } from './styles';
import SearchField from '../../components/SearchField'
import RestaurantCard from '../../components/Restaurant_card ';
import Filter from '../../components/Filter'
import FooterNav from '../../components/NavBottom';





export default function HomePage() {

  

  return (
    <MainContainer>
        <SearchField/>
        <Filter/>
        <CardContainer>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
        </CardContainer>
        <FooterNav/>
    </MainContainer>
  );
}