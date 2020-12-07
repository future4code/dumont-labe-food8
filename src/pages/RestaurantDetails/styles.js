import styled from 'styled-components';

export const RestaurantDetailsContainer = styled.main`
  width: 100vw;
  max-width: 420px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
export const CardRestaurantDetails = styled.div`
  width: 90vw;
  max-width: 420px;
  height: 246px;
  margin: 16px auto 0 auto;
  display: flex;
  flex-direction: column;
`
export const ImgContainer = styled.div`
  width: 100%;
  height: 120px;
  border-radius: 5px 5px 0 0;
`
export const ImgRestaurantDetails = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`
export const Restaurant = styled.h3`
  height: 18px;
  font-size: 16px;
  margin: 12px 0 8px 0;
  letter-spacing: -0.39px;
  color: #5cb646;
`
export const DeliveryTimeAndFreightContainer = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
`
export const GrayTexts = styled.span`
  height: 18px;
  margin: 8px 0;
  font-size: 16px;
  letter-spacing: -0.39px;
  margin-right: 18px;
  color: #b8b8b8;
`
export const ItemsContainer = styled.div`
  width: 90vw;
  max-width: 420px;
  margin: 8px auto 0 auto;
  display: flex;
  flex-direction: column;
`
export const TitleOfContainers = styled.span`
  height: 18px;
  margin: 8px 0;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.39px;
  color: #000000;
`
export const TitleBorder = styled.div`
  width: 100%;
  height: 1px;
  margin: 0 0 7px;
  border: solid 1px #000000;
`