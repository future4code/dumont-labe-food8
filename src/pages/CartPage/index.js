// React
import React, { useContext, useEffect, useState } from 'react';

// Context
import GlobalStateContext from '../../global/GlobalStateContext';

// Material-UI
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@material-ui/core';

// Styles
import { AddressContainer, AddressTitle, Title, Shipping, Wrapper, Total, TotalPrice, CheckBox, PaymentMethod, Button, ButtonContainer } from "./styles"

// Components
import CartFoodInfoCard from '../../components/CartFoodInfoCard'
import { getAddress } from '../../services/user';


export default function CartPage() {
  window.document.title="FutureEats"
  const { states, setters } = useContext(GlobalStateContext)
  const [value, setValue] = useState('')
  const [userAddress, setUserAddress] = useState(undefined)

  useEffect(() => {
    getAddress(setUserAddress)
  }, [])

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Wrapper>
      <AddressContainer>
        <AddressTitle>Endereço de entrega</AddressTitle>
        {userAddress ?
          <p>{`${userAddress.street}, ${userAddress.number} - ${userAddress.neighbourhood}`}</p>
          : <p>Buscando seu endereço..</p>
        }
      </AddressContainer>

      {Object.entries(states.cart).length !== 0 ? states.cart.products.map((product) => {
        if (product.quantity > 0) {
          return (
            <CartFoodInfoCard
              key={product.id}
              quantity={product.quantity}
              photoUrl={product.photoUrl}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          )
        }
      })
        :
        <Title>Carrinho vazio</Title>
      }

      <Shipping>Frete {new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(0)}</Shipping>
      <Total>
        <p>SUBTOTAL</p>
        <TotalPrice>{new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(0)}</TotalPrice>
      </Total>
      <PaymentMethod>Forma de pagamento</PaymentMethod>

      <CheckBox>
        <FormControl component="fieldset">
          <RadioGroup name="paymentMethod" value={value} onChange={handleChange}>
            <FormControlLabel value="dinheiro" control={<Radio color="primary" />} label="Dinheiro" />
            <FormControlLabel value="cartão" control={<Radio color="primary" />} label="Cartão de crédito" />
          </RadioGroup>
        </FormControl>
      </CheckBox>
      <ButtonContainer>
        <Button>Confirmar</Button>
      </ButtonContainer>
    </Wrapper>
  )
}