import { useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import { ContextProducts } from '../../Context/getProducts'
import { Basquete, Boxe, Futebol, FutebolAmericano, HeaderContainer, ModalitiesContanainer, Natação, Title } from './styles'



  export function MenuPage() {
    const { getProductsList, products } = useContext(ContextProducts)
    const navigate = useNavigate()
    const handleClick = useCallback(async (e: any) => {
      await getProductsList(e.currentTarget.id);
      navigate('/produtos')
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