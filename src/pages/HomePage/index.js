import React from 'react';
import { MainContainer, Filtre } from './styles';
import SearchField from '../../components/SearchField'
import RestaurantCard from '../../components/Restaurant_card ';
import Filter from '../../components/Filter'
import FooterNav from '../../components/NavBottom';





export default function HomePage() {

  

  return (
    <MainContainer>
        <SearchField/>
        <Filter/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <FooterNav/>
    </MainContainer>
  );
}