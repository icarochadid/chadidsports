import { Header } from "../../components/Header";
import failed from '../../assets/failed.png'
import {useNavigate} from 'react-router-dom'
import { Container } from "./styled";
export function CancelPage() {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  } 
  function goToMenu() {
    navigate('/menu')
  }
  return (
    <>
      <Header />
      <Container>
        <section>
          <img src={failed} alt="" />
          <h1>OPS! Sua compra não foi efeutada</h1>
          <p>Retorne à pagina anterior e efetue sua compra</p>
          <div>
            <button onClick={goBack} >RETORNAR A PAG. ANTERIOR</button>
            <button onClick={goToMenu}>RETORNAR AO MENU</button>
          </div>
        </section>
      
      </Container>
    </>
  )
}