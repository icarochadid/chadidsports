import { createContext, ReactNode, useState } from "react";

interface ContextProductsType {
  products: Array<ProductType>,
  getProductsList: (metadataValue: ProductType) => Promise<void>
}

interface childrenType {
  children: ReactNode
}

interface ProductType {
  id: string,
  name: string, 
  description: string, 
  default_price: any, 
  images: string,
  metadata: {
    [key: string] : string
  }
}

export const ContextProducts = createContext<ContextProductsType>({
  products: [],
  getProductsList: () => Promise.resolve()
})

export function ProductsProvider({children}: childrenType) {
  const [products, setProducts] = useState([])
  const url = import.meta.env.VITE_STRIPE_API_URL;
  const stripeAPIKey = import.meta.env.VITE_STRIPE_SECRET_KEY;
 
  async function getProductsList( metadataValue: any) {
    const response = await fetch(`${url}?limit=100`, {
      headers: {
        Authorization: `Bearer ${stripeAPIKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      } 
    })
    const convertResponse = await response.json()
    const filteredProducts = convertResponse.data
    console.log(filteredProducts)
    const productsObjects = filteredProducts.filter((product:ProductType) => {
      const metadata = product.metadata
      return !!metadata[metadataValue]
    }).map((product: ProductType) => {
        const name = product.name
        const id = product.id
        const description = product.description
        const images = product.images[0]
        const default_price = product.default_price
        const metadata = product.metadata
      const productObject = {
        name, 
        id,
        description, 
        images,
        default_price,
        metadata
      }
      return productObject
    }).reverse()
    console.log(productsObjects)
    setProducts(productsObjects)
    return productsObjects
  }
  
  return (
    <ContextProducts.Provider value={{ products, getProductsList}}>
      {children}
    </ContextProducts.Provider>
  )
}