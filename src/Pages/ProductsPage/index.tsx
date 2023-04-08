import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { ContextProducts, ProductType } from "../../Context/getProducts";
import { ContainerList } from "./styled";
import { getStripe } from "./stripe";
import { loadStripe } from "@stripe/stripe-js";
export function ProductPage() {
  const { id } = useParams()
  const { products } = useContext(ContextProducts) 

  async function HandleClick(productID: any) {
    const stripe = await getStripe()
    const product = products.find(p => p.id === productID)
    try {
      const { error } = stripe.redirectToCheckout({

        lineItems: [
          {
            price: `${product?.default_price}`,
            quantity: 1
          },
        ],
        mode: 'payment',
        successUrl: 'https://chadidsports.vercel.app/sucesso',
        cancelUrl: 'https://chadidsports.vercel.app/cancelado'
      });
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <Header />
      <ContainerList>
      {products.map((product)=> {
        return (
          <div key={product.id} >
            <img src={product.images} alt="imagem do produto" />
            <p><strong>{product.name}</strong></p>
            <p id="price">{product.price}</p>
            <button onClick={() => HandleClick(product.id)} >COMPRAR</button>
          </div>
      )
      })}
      </ContainerList>
    </>   
  )
}