import React from 'react';
import { MainContainer, Filtre, CardContainer } from './styles';
import SearchField from '../../components/SearchField'
import RestaurantCard from '../../components/RestaurantCard';
import Filter from '../../components/Filter'
import FooterNav from '../../components/NavBottom';
import useProtectedPage from '../../hooks/useProtectedPage';

export default function HomePage() {

  useProtectedPage()

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