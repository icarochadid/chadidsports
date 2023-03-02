import { stripeAxios } from "./axios"
import axios from "axios"


 export async function listProduct() {
     const response = await stripeAxios.get('/products')
     const products = response.data.data
     /*return products.map((products: any) => {
         console.log(products)
     })*/
        return products.map((product: any) => ({
            id: product.id,
            name: product.name,
            description: product.description,
            images: product.images ? product.images[0] : null,
            price: product.default_price, 
             
        }),
        )
        
    } 