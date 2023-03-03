import { useEffect } from "react";

export  function getProductsList() {
  const url = import.meta.env.VITE_STRIPE_API_URL;
  const stripeAPIKey = import.meta.env.VITE_STRIPE_SECRET_KEY;
 
  async function getProductsList() {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${stripeAPIKey}`
      } 
    })
    const convertResponse = await response.json()
    const dataProduct = convertResponse.data 
    const productsObject = dataProduct.map((product: any) => {
      return {
        name: product.name,
        description: product.description,
        images: product.images?.images[0],
        price: product.default_price,
        metadata: product.metadata
      }
    })
    return productsObject
  }

} 

