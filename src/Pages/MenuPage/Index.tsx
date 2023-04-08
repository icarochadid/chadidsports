import { useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import { ContextProducts } from '../../Context/getProducts'
import { Basquete, Boxe, Futebol, FutebolAmericano,  ModalitiesContanainer, Natação, Title } from './styles'



  export function MenuPage() {
    const { getProductsList, products } = useContext(ContextProducts)
    const navigate = useNavigate()
    const handleClick = useCallback(async (e: any) => {
      const id = e.currentTarget.id
      await getProductsList(id);
      navigate(`/produtos/${id}`)
    }, [getProductsList, products])
     
    
  
    return (
        <>
        <Header/>
        <section>
        <Title><h1>Qual é o seu esporte?</h1></Title>
            <ModalitiesContanainer>
            <Futebol>
              <button id='Futebol' onClick={handleClick}>
                <h1>Fubebol</h1>
              </button>
            </Futebol>
            <Boxe>
              <button id='Boxe' onClick={handleClick}>
                <h1>Boxe</h1>
              </button>
            </Boxe>
            <Basquete>
              <button id='Basquete' onClick={handleClick}>
                <h1>Basquete</h1>
              </button>
            </Basquete>
            <Natação>
              <button id='Natação' onClick={handleClick}>
                <h1>Natação</h1>
              </button>
            </Natação>
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