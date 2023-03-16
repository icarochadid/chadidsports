import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { ContextProducts } from "../../Context/getProducts";
import { ContainerList } from "./styled";

export function ProductPage() {
  const { id } = useParams()
  const { products } = useContext(ContextProducts)
  const productsList = useMemo(() => products, [products])
  return (
    <>
      <Header />
      <ContainerList>
      {productsList.map((product)=> {
        return (
          <div key={product.id} >
            <img src={product.images} alt="imagem do produto" />
            <p><strong>{product.name}</strong></p>
            <p id="price">{product.price}</p>
            <button>COMPRAR</button>
          </div>
      )
      })}
      </ContainerList>
    </>   
  )
}