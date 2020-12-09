import React, { useState } from 'react';

/*Tags styleds*/
import {
  CardContainer,
  FoodImg,
  InfoFoodContainer,
  NameIngredientsContainer,
  NameQuantityContainer,
  Quantity,
  FoodName,
  IngredientsContainer,
  PriceButtomContainer,
  FoodPrice,
  Button
} from './styles';

export default function CartFoodInfoCard(props) {

  return (
    <CardContainer>
      <FoodImg src={props.photo} alt={"Foto da comida"} />

      <InfoFoodContainer>

        <NameIngredientsContainer>
          <NameQuantityContainer>
            <FoodName>Nome da comida</FoodName>
            <Quantity quantity={5}>5</Quantity>
          </NameQuantityContainer>

          <IngredientsContainer>
            descrição
          </IngredientsContainer>
        </NameIngredientsContainer>

        <PriceButtomContainer>
          <FoodPrice>{new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(100)}</FoodPrice>

          <Button adding={false}>-1</Button>
          <Button adding={true}>+1</Button>

        </PriceButtomContainer>

      </InfoFoodContainer>
    </CardContainer>
  );
}