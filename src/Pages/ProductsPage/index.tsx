import { useContext, useMemo } from "react";
import { Header } from "../../components/Header";
import { ContextProducts } from "../../Context/getProducts";
import { ContainerList } from "./styled";

export function ProductPage() {
  const { products } = useContext(ContextProducts)
  const productsList = useMemo(() => products, [products])
  return (
    <>
      <Header />
      <ContainerList>
      {productsList.map((product)=> {
        return (
          <div key={product.id} >
            <img src={product.images} alt="" />
            <p><strong>{product.name}</strong></p>
            <p id="price">{product.default_price}</p>
            <button>COMPRAR</button>
          </div>
      )
      })}
      </ContainerList>
    </>   
  )
}