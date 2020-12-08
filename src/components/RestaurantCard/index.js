import React from 'react'
import { CardContainer, CardImage, CardInfo, Info } from './styles'
import Image from "../../assets/img/image.png"
const RestaurantCard = () => {
    return(
        <CardContainer>
            
            <CardInfo>
                <CardImage>
                    <img src={Image}/>
                </CardImage>
                <h3>Vinil Butantã</h3>
                <Info>
                    <p>50-60 min</p>
                    <p>Frete R$ 6,00</p>
                </Info>
                
            </CardInfo>
            
        </CardContainer>
    )
}

export default RestaurantCard