// React
import React, { useContext, useEffect, useState } from 'react'

// Context
import GlobalStateContext from '../../global/GlobalStateContext'

// Material-UI
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@material-ui/core'

// Styles
import { AddressContainer, AddressTitle, Title, Shipping, Wrapper, Total, TotalPrice, CheckBox, PaymentMethod, Button, ButtonContainer } from "./styles"

// Components
import CartFoodInfoCard from '../../components/CartFoodInfoCard'
import { getAddress, placeOrder } from '../../services/user'
import { useHistory } from 'react-router-dom'


export default function CartPage() {
  window.document.title = "FutureEats"
  const { states, setters } = useContext(GlobalStateContext)
  const [payMethod, setPayMethod] = useState('')
  const [userAddress, setUserAddress] = useState(undefined)

  const history = useHistory()

  useEffect(() => {
    getAddress(setUserAddress)
  }, [])

  const handleChange = (event) => {
    setPayMethod(event.target.value)
  }

  const addItem = (id) => {
    const newProducts = states.cart.products.map(product => {
      if (product.id === id) {
        const newQuantity = product.quantity + 1
        const completeProduct = {
          ...product,
          quantity: newQuantity
        }
        return completeProduct
      } else {
        return product
      }
    })

    const newCart = { ...states.cart, products: newProducts }
    setters.setCart(newCart);
  }

  const subtractItem = (id) => {
    const newProducts = states.cart.products.map(product => {
      if (product.id === id) {
        const newQuantity = product.quantity - 1
        const completeProduct = {
          ...product,
          quantity: newQuantity
        }
        return completeProduct
      } else {
        return product
      }
    })

    const newCart = { ...states.cart, products: newProducts }
    setters.setCart(newCart);
  }

  const sendOrder = () => {
    if (!payMethod) {
      alert("Selecione um método de pagamento.")
    } else if (Object.entries(states.cart).length !== 0) {
      const productsArray = states.cart.products.filter((item) => {
        return item.quantity > 0
      }).map((product) => {
        return {
          id: product.id,
          quantity: product.quantity
        }
      })

      const body = {
        products: productsArray,
        paymentMethod: payMethod
      }
      placeOrder(body, states.cart.id, history)
    } else {
      alert("Escolha um produto!")
    }
  }

  const calculateSubtotal = () => {
    let sum = 0
    if (Object.entries(states.cart).length !== 0) {
      states.cart.products.forEach(
        (item) => {
          sum += item.price * item.quantity
        }
      )
      return states.cart.shipping + sum
    }
    return 0
  }

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
              id={product.id}
              key={product.id}
              quantity={product.quantity}
              photoUrl={product.photoUrl}
              name={product.name}
              description={product.description}
              price={product.price}
              addItem={addItem}
              subtractItem={subtractItem}
            />
          )
        }
      })
        :
        <Title>Carrinho vazio</Title>
      }

      <Shipping>Frete {new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(states.cart.shipping || 0)}</Shipping>
      <Total>
        <p>SUBTOTAL</p>
        <TotalPrice>{new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(calculateSubtotal())}</TotalPrice>
      </Total>
      <PaymentMethod>Forma de pagamento</PaymentMethod>

      <CheckBox>
        <FormControl component="fieldset" required={true}>
          <RadioGroup name="paymentMethod" value={payMethod} onChange={handleChange}>
            <FormControlLabel value="money" control={<Radio color="primary" />} label="Dinheiro" />
            <FormControlLabel value="creditcard" control={<Radio color="primary" />} label="Cartão de crédito" />
          </RadioGroup>
        </FormControl>
      </CheckBox>
      <ButtonContainer>
        <Button onClick={sendOrder}>Confirmar</Button>
      </ButtonContainer>
    </Wrapper>
  )
}