import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100vw;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;  
`
export const CardContainer = styled.div`
    width: 100vw;
    max-width: 420px;
    margin-bottom: 60px;
    margin: 0 auto;
    border-radius: 10px;
`
export const NoResultsContainer = styled.div`
    margin: 30px auto 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const NoResults = styled.span`
    font-weight: bold;
`
export const Text = styled.p`
    font-weight: bold;
    color: white;
    margin-bottom: 8px;
`
export const SnackBar = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  position:fixed;
  bottom: 60px;
  width: 100vw;
  max-width: 420px;
  height: 118px;
  padding: 24px;
  background-color: #5cb646;
`
export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: stretch;
    margin-left: 32px;
`
export const Subtotal = styled.p`
  height: 18px;
  margin: 7px 0 0;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.39px;
  color: #000000;
`


