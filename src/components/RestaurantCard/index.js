import React from 'react'
import { CardContainer, CardImage, CardInfo, Info } from './styles'
//import Image from "../../assets/img/image.png"

const RestaurantCard = (props) => {
    return(
        <CardContainer>
            
            <CardInfo>
                <CardImage>
                    {props.image}
                </CardImage>
                <h3>{props.name}</h3>
                <Info>
                    <p>{props.deliveryTime}</p>
                    <p>Frete R$ {props.shipping},00</p>
                </Info>
                
            </CardInfo>
            
        </CardContainer>
    )
}

export default RestaurantCard