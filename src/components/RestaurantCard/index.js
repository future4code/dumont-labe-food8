import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToRestaurantsDetails } from '../../routes/coordinator'
import { CardContainer, CardImage, CardInfo, Info } from './styles'
//import Image from "../../assets/img/image.png"

const RestaurantCard = (props) => {
    const history = useHistory()

    return (
        <CardContainer onClick={() => goToRestaurantsDetails(history, props.id)}>

            <CardInfo>

                <CardImage>
                    {props.image}
                </CardImage>
                <h3>{props.name}</h3>
                <Info>
                    <p>{`${props.deliveryTime - 10} - ${props.deliveryTime}`} min</p>
                    <p>Frete {new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(props.shipping)}</p>
                </Info>

            </CardInfo>

        </CardContainer>
    )
}

export default RestaurantCard