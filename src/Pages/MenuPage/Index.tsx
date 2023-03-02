import whitelogo from '../../assets/MenuPageImages/whitelogo.png'
import { Basquete, Boxe, Futebol, FutebolAmericano, HeaderContainer, ModalitiesContanainer, Natação, Title } from './styles'
import { useContext, useEffect, useState } from 'react'
import { AccessContext } from '../../Context/context'
import dotenv from 'dotenv'
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'
import { stripeAxios } from '../../axios'
import { listProduct } from '../../stripe'

interface ProductType {
  id: string,
  name: string, 
  description: string, 
  price: any, 
  image: string | null
}


export function MenuPage() {
        const [Products, setProducts] = useState<ProductType[]>([])
        useEffect(() => {
            async function fetchProducts() {
                const products = await listProduct();
                setProducts(products)      
            } 
            fetchProducts()
            console.log(Products)
        }, []) 
     

        

    ''
   

    return (
        <>
        <HeaderContainer>
            <img src={whitelogo} alt="" />
            
        </HeaderContainer>
        <section>
        <Title><h1>Qual é o seu esporte?</h1></Title>
        <ModalitiesContanainer>
                    <Futebol><button><h1>Fubebol</h1></button></Futebol>
        <Boxe><button><h1>Boxe</h1></button></Boxe>
        <Basquete><button><h1>Basquete</h1></button></Basquete>
        <Natação><button><h1>Natação</h1></button></Natação>
        <FutebolAmericano><button><h1>Fubebol Americano</h1></button></FutebolAmericano>
        </ModalitiesContanainer>
        </section>
        </>
    )
}