import whitelogo from '../../assets/MenuPageImages/whitelogo.png'
import { Basquete, Boxe, Futebol, FutebolAmericano, HeaderContainer, ModalitiesContanainer, Natação, Title } from './styles'
import { MouseEventHandler, SetStateAction, useContext, useEffect, useState } from 'react'
import { AccessContext } from '../../Context/context'
import dotenv from 'dotenv'
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'

interface ProductType {
  id: string,
  name: string, 
  description: string, 
  default_price: any, 
  images: string  | null,
  metadata: string | null
}

export function MenuPage() {
  const [products, setProducts] = useState([])
  const [metadataKey, setMetadataKey] = useState('')
  const [metadataValue, setMetadataValue] = useState('')
  const url = import.meta.env.VITE_STRIPE_API_URL;
  const stripeAPIKey = import.meta.env.VITE_STRIPE_SECRET_KEY;
 
  async function getProductsList(metadataKey: string, metadataValue: string) {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${stripeAPIKey}`
      } 
    })
    const convertResponse = await response.json()
    const dataProduct = convertResponse.data
    const filteredProducts = dataProduct.filter((product: any) => {
      const metadata = product.metadata
      return metadata === metadataValue
    })
    const productsObject = filteredProducts.map((product : any) => {
      return {
        name: product.name,
        description: product.description,
        images: product.images[0],
        price: product.default_price,
        metadata: product.metadata,
      } 
      
    })
    return productsObject
  }
  async function handleClick(e: any) {
    setMetadataValue(e.currentTarget.id)
    await getProductsList(metadataKey, e.currentTarget.id)
      .then(product => console.log(product))
    
  }
  
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
            <FutebolAmericano>
              <button id='Futebol Americano' onClick={handleClick}>
                <h1>Fubebol Americano</h1>
              </button>
            </FutebolAmericano>
            </ModalitiesContanainer>
        </section>
        </>
    )
}