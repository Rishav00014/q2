import React, { useState } from 'react'
import styled from 'styled-components'

import poster from '../img/poster.jpg'
import i0 from '../img/milk.jpg'
import i1 from '../img/cream.jpg'
import i2 from '../img/latte.jpg'
import i3 from '../img/espresso.webp'
import i4 from '../img/cappuccino.jfif'
import i5 from '../img/lattec.jfif'

import Box from './box'

const Root =styled.div`
    background-color: black;
    color: #fff;
    font-family: "McLaren", cursive;
`;
const Poster =styled.img`
    height: 40vw;
    width: 100vw;
`;
const Dilog =styled.div`
    height: 40vw;
    width: 30vw;
    position: absolute;
    top: 5rem;
    right: 0px;
    font-size: 7vw;
`;
const Title =styled.div`
    margin: 1rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
`;
const Layout =styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
`;
const Wraper =styled.div`
    display: flex;
    flex-direction: column;
`;
const Line =styled.div`
    width: 40vw;
    height: 3px;
    background-color: white;
    margin:1rem 2rem;
`;
const Container =styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const Butt =styled.button`
    padding: 0.5rem;
    margin: 0.5rem;
    font-size: 1rem;
`;
const Btn =styled.button`
    padding: 0.5rem;
    margin: 0.5rem;
    font-size: 1rem;
`;
const Bill =styled.div`
    display: flex;
    flex-direction: column;
`;


const Page = () => {
    const [getQuantity,setQuantity]=useState(1);
    const [getOrder,setOrder]=useState([]);
    var typeOfCofee=[
        {
            img:i3,
            name:"Espresso"
        },
        {
            img:i4,
            name:"Cappuccino"
        },
        {
            img:i5,
            name:"Latte"
        }
    ]
    var typeOfIng=[
        {
            img:i0,
            name:"Milk"
        },
        {
            img:i1,
            name:"Cream"
        },
        {
            img:i2,
            name:"Latte"
        }
    ]
    return (
        <Root>
            <Poster src={poster} alt="main poster"/>
            <Dilog>Life Begins After Coffe</Dilog>
            <Container>
                <Line />
                <Title >Menu</Title>
                <Line />
            </Container>
            <Wraper>
                <Title>Select the Coffee :</Title>
                <Layout>
                    {typeOfCofee.map((element) => <Box source={element} type="c" />)}
                </Layout>
            </Wraper>
            <Wraper>
                <Title>Select the Add on :</Title>
                <Layout>
                    {typeOfIng.map((element) => <Box source={element} type="i" />)}
                </Layout>
            </Wraper>
            <Wraper>
                <Title>
                    Quantity : 
                    <div>
                    <Butt onClick={()=>{if(getQuantity>1){setQuantity(getQuantity-1)}}}>-</Butt>
                    {getQuantity}
                    <Butt onClick={()=>{setQuantity(getQuantity+1)}}>+</Butt>
                    </div>
                    <Btn>Add to cart</Btn>
                </Title>
            </Wraper>
            <Container>
                <Line />
                <Title >Bill</Title>
                <Line />
            </Container>
            <Bill>
                
            </Bill>
        </Root>
    )
}

export default Page