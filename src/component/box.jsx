import React from 'react'
import styled from 'styled-components';


const Window =styled.img`
    height: 20vw;
    width: 20vw;
  &:hover{
    opacity: 0.5;
  }  
`;

const In =styled.input`
  
`;

const Name =styled.div`
    text-align: center;
    font-size: 2vw;
    color: #fff;
    font-family: "McLaren", cursive;
    
`;
const box = (props) => {
  return (
    <div>
    <label>
      <Window src={props.source.img} />
      <Name><In type="radio"  name={props.type} checked />{props.source.name}</Name>
    </label>
    </div>
  )
}

export default box