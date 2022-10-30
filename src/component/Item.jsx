import React from 'react'

const BillItem =styled.div`
    display: flex;
    justify-content: space-between;
`;


const Item = (props) => {
  return (
    <BillItem>
    {props.ite.name}
    {props.ite.price}
    </BillItem>
  )
}

export default Item