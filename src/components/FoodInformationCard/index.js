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

export default function FoodInformationCard(props) {
  const handleModal = (id) => {
    props.openModal(id)
  }

  const removeQuantityCard = (id) => {
    props.remove(id)
  }

  return (
    <CardContainer>
      <FoodImg src={props.photo} alt={"Foto da comida"}/>

      <InfoFoodContainer>

        <NameIngredientsContainer>
          <NameQuantityContainer>
            <FoodName>{props.name}</FoodName>
            <Quantity quantity={props.quantity}>{props.quantity}</Quantity>
          </NameQuantityContainer>

          <IngredientsContainer>
            {props.description}
          </IngredientsContainer>
        </NameIngredientsContainer>

        <PriceButtomContainer>
          <FoodPrice>{new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(props.price)}</FoodPrice>
          {props.quantity === 0 ? (
            <Button onClick={() => handleModal(props.productId)} quantity={props.quantity}>adicionar</Button>
          ) : (
              <Button onClick={() => removeQuantityCard(props.productId)} quantity={props.quantity}>remover</Button>
            )
          }

        </PriceButtomContainer>

      </InfoFoodContainer>
    </CardContainer>
  );
}