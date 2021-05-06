import styled from 'styled-components';

export const PageRestaurantContainer = styled.main`
  width: 100vw;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  margin: 0 auto 50px auto;
  position: relative;
`
export const RestaurantDetailsContainer = styled.div`
  width: 100vw;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  margin: 0 auto 30px auto;
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
  object-fit: cover;
`
export const ImgRestaurantDetails = styled.img`
  width: 100%;
  height: 120px;  
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
export const ModalContainer = styled.div`
  ${(props) => props.view === false ? 'display: none' : (
    ` min-height: 100%;
      width: 100vw;
      max-width: 420px;
      background-color: rgba(0, 0, 0, 0.5);

      position: absolute;
      top: 0;
      bottom: 0;

      display: flex;
      justify-content: center;

      transition: 400ms;
      z-index: 99;
  `
    )}
`
export const ModalOptionsForm = styled.form`
  width: 90vw;
  max-width: 420px;
  height: 216px;
  background-color: #FFFFFF;
  padding: 11px 0 68px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  margin-top: 300px;
`
export const ModalTitle = styled.div`
  width: 296px;
  height: 18px;
  margin-top: 70px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.39px;
  color: #000000;
`
export const Select = styled.select`
  width: 90%;
  height: 56px;
  margin: 31px 0 16px 0;
  font-weight: bold;
  padding: 16px;
  border-radius: 4px;
  border: solid 1px #b8b8b8;
  outline: none;
`
export const Options = styled.option`
  height: 18px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.39px;
  color: #000000;
`
export const Button = styled.button`
  align-self: flex-end;
  margin: 28px 16px 0 0;
  width: 200px;
  height: 19px;
  font-size: 16px;
  letter-spacing: -0.39px;
  text-align: right;
  color: #5cb646;
  background-color: #FFFFFF;
  border: none;
  outline: none;
  text-transform: uppercase;
  cursor: pointer;
`