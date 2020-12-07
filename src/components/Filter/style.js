import styled from 'styled-components';

export const FilterField = styled.div`
  width: 360px;
  height: 32px;
  padding: 12px 0 12px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  overflow-x: hidden;
  
   
`
export const FilterText = styled.div`
  width: 360px;
  padding: 16px 0 16px 52px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  

  p{
    font-size: 16px;
    margin-left: 16px;    
  }

  p:hover{
    color: #5cb646;
  }
`