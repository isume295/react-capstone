import React from 'react';
import { styled } from 'styled-components';

export default function NavBar() {
  return (
    <Div>
      <div>Financial Status</div>
    </Div>
  );
}

const Div = styled.div`
display: flex;
justify-content: center;
height: 40px;
background-color: #EC4C8A;
align-items: center;
font-size: 16px;
font-family: 'Lato', sans-serif;
font-weight: 700;
`;
