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
  useProtectedPage()
  const { states, setters } = useContext(GlobalStateContext)
  const [infosRestaurant, setInfosRestaurant] = useState({})
  const [openModal, setOpenModal] = useState(false)
  const [quantity, setQuantity] = useState(0)
  const [cardId, setCardId] = useState('')

  const { id } = useParams();
  const token = localStorage.getItem('token')

  useEffect(() => {
    api.get(`/restaurants/${id}`, {
      headers: {
        auth: token
      }
    }).then((res) => {
      setInfosRestaurant(res.data.restaurant)
    }).catch((error) => {
      console.log(error.message)
    })

  }, [id, token])

  const hadleModal = (id) => {
    setCardId(id)
    setOpenModal(!openModal)
    window.scrollTo(0,0);
  }

  const addToCart = (event) => {
    event.preventDefault()
    setQuantity(quantity)
    hadleModal()

    const product = infosRestaurant.products.filter(product => {
      return product.id === cardId
    })

    const newItem = [...states.cart, product[0]]
    setters.setCart(newItem);
    localStorage.setItem("cart", JSON.stringify(newItem))
  }
  const removeToCart = (id) => {
    const index = states.cart.findIndex((item) => item.id === id);
    states.cart.splice(index, 1)
  }

  const onChangeQuantity = (event) => {
    setQuantity(Number(event.target.value))
  }

  return (
    <PageRestaurantContainer>
      <Header />
      <RestaurantDetailsContainer>
        {Object.entries(infosRestaurant).length === 0 ? (
          <h1>Carregando...</h1>
        ) : (
            <div>
              <CardRestaurantDetails>
                <ImgContainer>
                  <ImgRestaurantDetails src={infosRestaurant.logoUrl} />
                </ImgContainer>
                <Restaurant>{infosRestaurant.name}</Restaurant>
                <GrayTexts>{infosRestaurant.category}</GrayTexts>

                <DeliveryTimeAndFreightContainer>
                  <GrayTexts>{`${infosRestaurant.deliveryTime - 10} - ${infosRestaurant.deliveryTime}`} min</GrayTexts>
                  <GrayTexts>Entrega {new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(infosRestaurant.shipping)}</GrayTexts>
                </DeliveryTimeAndFreightContainer>

                <GrayTexts>{infosRestaurant.address}</GrayTexts>
              </CardRestaurantDetails>

              <ItemsContainer>
                <TitleOfContainers>Principais</TitleOfContainers>
                <TitleBorder />

                {infosRestaurant.products.map(product => {
                  if (product.category !== 'Acompanhamento')
                    return <FoodInformationCard
                      key={product.id}
                      productId={product.id}
                      openModal={hadleModal}
                      remove={removeToCart}
                      name={product.name}
                      description={product.description}
                      photo={product.photoUrl}
                      price={product.price}
                      quantity={quantity}
                    />
                })}
              </ItemsContainer>

              <ItemsContainer>
                <TitleOfContainers>Acompanhamentos</TitleOfContainers>
                <TitleBorder />
                {infosRestaurant.products.map(product => {
                  if (product.category === 'Acompanhamento')
                    return <FoodInformationCard
                      key={product.id}
                      productId={product.id}
                      openModal={hadleModal}
                      remove={removeToCart}
                      name={product.name}
                      description={product.description}
                      photo={product.photoUrl}
                      price={product.price}
                      quantity={quantity}
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
            <Select onChange={onChangeQuantity}>
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