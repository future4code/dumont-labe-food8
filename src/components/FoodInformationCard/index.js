import React from 'react';

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

export default function FoodInformationCard() {
  const quantitiy = 0
  return (
    <CardContainer>
      <FoodImg src={'https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/95588246-1173-4513-89DA-A6107AFECF60.png'} />

      <InfoFoodContainer>

        <NameIngredientsContainer>
          <NameQuantityContainer>
            <FoodName>Bullguer</FoodName>
            <Quantity quantity={quantitiy}>{quantitiy}</Quantity>
          </NameQuantityContainer>

          <IngredientsContainer>
            Pão, carne, queijo, cebola roxa, tomate, alface e molho.
          </IngredientsContainer>
        </NameIngredientsContainer>

        <PriceButtomContainer>
          <FoodPrice>R$23,00</FoodPrice>
          <Button quantity={quantitiy}>{quantitiy === 0 ? 'adicionar' : 'remover'}</Button>
        </PriceButtomContainer>

      </InfoFoodContainer>
    </CardContainer>
  );
}