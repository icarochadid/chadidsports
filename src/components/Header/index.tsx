import Logo from '../../assets/MenuPageImages/whitelogo.png'
import { HeaderContainer } from './styled'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <div>
        <nav>
          <a href="#">Quem é o criador?</a>
          <a href="#">Tecnologias Ultilizadas</a>
          <a href="#">O que é a ChadidSports?</a>
        </nav>
      </div>
   </HeaderContainer>
  )
}