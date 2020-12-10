import styled from 'styled-components';

export const FilterField = styled.div`
  width: 100vw;
  max-width:420px;
  padding: 12px 0 12px 8px;
  display: flex;
  flex-direction: wrap;
  //justify-content: center;
  align-items: center;
  margin-top: 20px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
  height: 4px;          
  width: 4px;              
  border: 1px solid transparent;
}
`

export const FilterText = styled.div`
  width: 100vw;
  max-width:420px;
  height: 42px;
  padding: 12px 0 0 0;
  display: flex;
  flex-direction: wrap;
  
  p{
  width: 87px;
  height: 18px;
  margin: 0 0 0 8px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
}  
  
  p:hover{
    color: #5cb646;
  }
`