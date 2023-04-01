import { Header } from "../../components/Header";
import checked from '../../assets/checked.png'
import { Container } from "./styled";
import { useNavigate } from "react-router-dom";
export function SuccessPage() {
  const navigate = useNavigate()
  function redirectUser() {
    navigate('/menu')
  }
  return (
    <>
      <Header />
      <Container>
        <section>
            <img src={checked} alt="" />
            <h1><strong>Sua compra foi concluída com sucesso</strong></h1>
            <p>Obrigado por escolher a ChadidSports</p>
          <button onClick={redirectUser}>RETORNAR AO MENU</button>
        </section>
      </Container>
    </>
  )
}