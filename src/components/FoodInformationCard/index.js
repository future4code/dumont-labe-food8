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
  const [viewQuantity, setViewQuantity] = useState(false)
  const [quantityItem, setQuantityItem] = useState(0)


  const handleModal = (id) => {
    props.openModal(id)
    setQuantityItem(1)
  }

  const removeQuantityCard = (id) => {
      setViewQuantity(false)
      setQuantityItem(0)
      props.remove(id)
  }

  return (
    <CardContainer>
      <FoodImg src={props.photo} />

      <InfoFoodContainer>

        <NameIngredientsContainer>
          <NameQuantityContainer>
            <FoodName>{props.name}</FoodName>
            {/* {viewQuantity &&
              <Quantity quantity={quantityItem}>{quantityItem}</Quantity>
            } */}
          </NameQuantityContainer>

          <IngredientsContainer>
            {props.description}
          </IngredientsContainer>
        </NameIngredientsContainer>

        <PriceButtomContainer>
          <FoodPrice>{new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(props.price)}</FoodPrice>
          {quantityItem === 0 ? (
            <Button onClick={() => handleModal(props.productId)} quantity={quantityItem}>adicionar</Button>
          ) : (
              <Button onClick={() => removeQuantityCard(props.productId)} quantity={quantityItem}>remover</Button>
            )

          }

        </PriceButtomContainer>

      </InfoFoodContainer>
    </CardContainer>
  );
}