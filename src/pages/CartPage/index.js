import React, { useState } from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import { AddressContainer, AddressTitle, Title, Shipping, Wrapper, Total, TotalPrice, CheckBox, PaymentMethod, Button, ButtonContainer } from "./styles"
import CartFoodInfoCard from '../../components/CartFoodInfoCard'

export default function CartPage() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Wrapper>
      <AddressContainer>
        <AddressTitle>Endereço de entrega</AddressTitle>
        <p>Rua paralelepidedo, 001</p>
      </AddressContainer>

      <Title>Carrinho vazio/cheio</Title>

      <CartFoodInfoCard />

      <Shipping>Frete R$0,00</Shipping>
      <Total>
        <p>SUBTOTAL</p>
        <TotalPrice>R$00,00</TotalPrice>
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
        <Button>CONFIRMAR</Button>
      </ButtonContainer>
    </Wrapper>
  )
}