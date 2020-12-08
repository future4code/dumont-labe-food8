import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 360px;
  height: 196px;
  padding: 8px 16px 0;

`
export const CardInfo = styled.div`
  width: 328px;
  height: 188px;
  padding: 0 0 16px;
  border-radius: 8px;
  border: solid 1px #94A6B9;
  margin-top: 8px;
  margin-bottom: 8px;

  h3{
    color: #5cb646;
    font-size: 16px; 
    margin-left: 8px;
  }
`
export const Info = styled.div`
    display: flex;
    justify-content: space-between;

    p{
       font-size: 16px;
       color: #94A6B9;
       margin-left: 8px;
       margin-right: 8px;
       margin-top: 8px;
       
    }
`

export const CardImage = styled.div`
  width: 328px;
  height: 120px;
  margin: 0 0 12px;
  

  img{
    width: 328px;
    height: 120px;
    margin: 0 0 12px;
  }
  
`
