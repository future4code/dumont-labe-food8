import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

/*Serviços*/
import api from '../../services/api';

/*Contexts*/
import GlobalStateContext from "../../global/GlobalStateContext";

/*Hooks Customizados*/
import useProtectedPage from '../../hooks/useProtectedPage';

/*Components*/
import FoodInformationCard from '../../components/FoodInformationCard';
import Header from '../../components/Header';
import Loading from '../../components/Loading';

/*Tags styleds*/
import {
  PageRestaurantContainer,
  RestaurantDetailsContainer,
  CardRestaurantDetails,
  ImgContainer,
  ImgRestaurantDetails,
  Restaurant,
  DeliveryTimeAndFreightContainer,
  GrayTexts,
  ItemsContainer,
  TitleOfContainers,
  TitleBorder,
  ModalContainer,
  ModalOptionsForm,
  ModalTitle,
  Select,
  Options,
  Button
} from './styles';

export default function RestaurantDetails() {
  window.document.title="FutureEats"
  useProtectedPage()
  const { states, setters } = useContext(GlobalStateContext)
  const [openModal, setOpenModal] = useState(false)
  const [quantity, setQuantity] = useState(0)
  const [cardId, setCardId] = useState('')

  const { id } = useParams();
  const token = localStorage.getItem('token')

  const addQuantityProperty = (restaurantInfo) => {
    let newProducts
    let newInfosRestaurant

    if (Object.entries(states.cart).length === 0 || states.cart.id !== restaurantInfo.id) {
      newProducts = restaurantInfo.products.map((product) => {
        return { ...product, quantity: 0 }
      })

      newInfosRestaurant = { ...restaurantInfo, products: newProducts }

      setters.setCart(newInfosRestaurant)
    }
  }

  useEffect(() => {
    api.get(`/restaurants/${id}`, {
      headers: {
        auth: token
      }
    }).then((res) => {
      addQuantityProperty(res.data.restaurant)
    }).catch((error) => {
      console.log(error.message)
    })

  }, [addQuantityProperty, id, token])

  

  const handleModal = (id) => {
    setCardId(id)
    setOpenModal(!openModal)
    window.scrollTo(0, 0);
  }

  const addToCart = (event) => {
    event.preventDefault()
    handleModal()

    const newProducts = states.cart.products.map(product => {
      if (product.id === cardId) {
        const completeProduct = {
          ...product,
          quantity: quantity
        }
        return completeProduct
      } else {
        return product
      }
    })

    const newCart = { ...states.cart, products: newProducts }

    setters.setCart(newCart);
    setQuantity(0)
  }

  const removeToCart = (id) => {
    const newProducts = states.cart.products.map(product => {
      if (product.id === id) {
        const completeProduct = {
          ...product,
          quantity: 0
        }
        return completeProduct
      } else {
        return product
      }
    })

    const newCart = { ...states.cart, products: newProducts }
    setters.setCart(newCart);
  }

  const onChangeQuantity = (event) => {
    setQuantity(Number(event.target.value))
  }

  return (
    <PageRestaurantContainer>
      <Header />
      <RestaurantDetailsContainer>
        {Object.entries(states.cart).length === 0 ? (
          <Loading />
        ) : (
            <div>
              <CardRestaurantDetails>
                <ImgContainer>
                  <ImgRestaurantDetails src={states.cart.logoUrl} />
                </ImgContainer>
                <Restaurant>{states.cart.name}</Restaurant>
                <GrayTexts>{states.cart.category}</GrayTexts>

                <DeliveryTimeAndFreightContainer>
                  <GrayTexts>{`${states.cart.deliveryTime - 10} - ${states.cart.deliveryTime}`} min</GrayTexts>
                  <GrayTexts>Entrega {new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(states.cart.shipping)}</GrayTexts>
                </DeliveryTimeAndFreightContainer>

                <GrayTexts>{states.cart.address}</GrayTexts>
              </CardRestaurantDetails>

              <ItemsContainer>
                <TitleOfContainers>Principais</TitleOfContainers>
                <TitleBorder />

                {states.cart.products.map(product => {
                  if (product.category !== 'Acompanhamento')
                    return <FoodInformationCard
                      key={product.id}
                      productId={product.id}
                      openModal={handleModal}
                      remove={removeToCart}
                      name={product.name}
                      description={product.description}
                      photo={product.photoUrl}
                      price={product.price}
                      quantity={product.quantity}
                    />
                })}
              </ItemsContainer>

              <ItemsContainer>
                <TitleOfContainers>Acompanhamentos</TitleOfContainers>
                <TitleBorder />
                {states.cart.products.map(product => {
                  if (product.category === 'Acompanhamento')
                    return <FoodInformationCard
                      key={product.id}
                      productId={product.id}
                      openModal={handleModal}
                      remove={removeToCart}
                      name={product.name}
                      description={product.description}
                      photo={product.photoUrl}
                      price={product.price}
                      quantity={product.quantity}
                    />
                })}
              </ItemsContainer>
            </div>
          )
        }
      </RestaurantDetailsContainer>
      <ModalContainer view={openModal}>
        <ModalOptionsForm onSubmit={addToCart}>
          <ModalTitle>Selecione a quantidade desejada</ModalTitle>
          <Select onChange={onChangeQuantity} value={quantity}>
            <Options value={0} hidden>0</Options>
            <Options value={1}>1</Options>
            <Options value={2}>2</Options>
            <Options value={3}>3</Options>
            <Options value={4}>4</Options>
            <Options value={5}>5</Options>
            <Options value={6}>6</Options>
            <Options value={7}>7</Options>
            <Options value={8}>8</Options>
            <Options value={9}>9</Options>
            <Options value={10}>10</Options>
          </Select>
          <Button>Adicionar ao Carrinho</Button>
        </ModalOptionsForm>
      </ModalContainer>
    </PageRestaurantContainer>
  )
}
