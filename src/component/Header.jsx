import React from 'react';
import styled from 'styled-components';

const Content = styled.h1`
  color: #fff;
  font-family: "McLaren", cursive;
  font-weight: 200;
`;

const Title =styled.div`
  width: 100vw;
  height: 5rem;
  background-color: #151412;
  padding: 1rem 2rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0px;
  z-index: 2;
`; 

function Header() {
    return(
        <Title>
            <Content>Coffee Shop</Content>
        </Title>
    );
    
}

export default Header;