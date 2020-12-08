import styled from "styled-components"
import React from 'react';

  const Bar = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  width: 100%;
  height: 64px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 gray;
  background-color: #ffffff;  
`;
  const Title = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  width: 175px;
  height: 44px;
  margin: 20px 92px 0 93px;
  padding: 13px 42px 12px;
  width: 91px;
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;  
`;

export default function Header() {
  return (    
        <Bar>
            <Title>Header</Title>
        </Bar>   
  );
}