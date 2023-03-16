import { createContext, ReactNode, useState, useEffect } from "react";

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
  price: string, 
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
  const [products, setProducts] = useState(() => {
    const productsFromLocalStorage = localStorage.getItem('products')
    if (productsFromLocalStorage) {
      return JSON.parse(productsFromLocalStorage)
    } return []
  });
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
    const productsObjects = filteredProducts.filter((product:ProductType) => {
      const metadata = product.metadata.Category
      return metadata == metadataValue
      }).map((product: ProductType) => {
        const name = product.name
        const id = product.id
        const description = product.description
        const images = product.images[0]
        const price = product.metadata.Price
        const metadata = product.metadata.Category
      const productObject = {
        name, 
        id,
        description, 
        images,
        price,
        metadata
      }
      return productObject
    }).reverse()
    localStorage.setItem('products', JSON.stringify(productsObjects))
    setProducts(productsObjects)
    return productsObjects
  } 
    
  useEffect(() => {
    const productsFromLocalStorage = localStorage.getItem('products');
    if (productsFromLocalStorage) {
      setProducts(JSON.parse(productsFromLocalStorage))
    }
    }, [])
  return (
    <ContextProducts.Provider value={{ products, getProductsList}}>
      {children}
    </ContextProducts.Provider>
  )
}