import { useNavigate, NavLink } from 'react-router-dom'
import Logo from '../../assets/whitelogo.png'
import { HeaderContainer } from './styled'

export function Header() {
  const navigate = useNavigate()
  function handleClick() {
    navigate('/menu')
  }
  return (
    <HeaderContainer>
      <button onClick={handleClick}><img src={Logo} alt="" /></button>
      <div>
        <nav>
          <NavLink to={'/criador'}>Quem é o criador?</NavLink>
          <NavLink to={'/tecnologias'}>Tecnologias Ultilizadas</NavLink>
          <a href="#">O que é a ChadidSports?</a>
        </nav>
      </div>
   </HeaderContainer>
  )
}