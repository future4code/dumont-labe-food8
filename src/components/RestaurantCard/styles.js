import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 90vw;
  max-width: 420px;
  height: 196px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`
export const CardInfo = styled.div`
  width: 100%;
  height: 188px;
  border-radius: 8px;
  border: solid 1px #94A6B9;
  margin-top: 8px;
  margin-bottom: 12px;

  h3 {
    color: #5cb646;
    font-size: 16px; 
    margin-left: 8px;
  }
`
export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 8px 8px 0 0;

    p {
        font-size: 16px;
        color: #94A6B9;
        margin-left: 8px;
        margin-right: 8px;
        margin-top: 8px;
    }
`
export const CardImage = styled.div`
  width: 100%;
  height: 120px;
  margin: 0 0 12px;
  border-radius: 8px 8px 0 0;

  img{
    width: 100%;
    height: 120px;
    border-radius: 8px 8px 0 0;
  }
  
`
