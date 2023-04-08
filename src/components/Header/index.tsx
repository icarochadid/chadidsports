import { useNavigate, NavLink } from 'react-router-dom'
import Logo from '../../assets/whitelogo.png'
import menu from '../../assets/menu.png'
import { HeaderContainer } from './styled'
import { useState } from 'react'

export function Header() {
  const [navBarId, setNavBarId] = useState('navBarClosed')
  const navigate = useNavigate()               
  function handleClick() {
    navigate('/menu')
  }
  function showNavBar() {
    navBarId === 'navBar' ? setNavBarId('navBarClosed') : setNavBarId('navBar')
  }
  return (
    <HeaderContainer>
        <button id='logo' onClick={handleClick}><img src={Logo} alt="" /></button>
        <button id='burguerMenu' onClick={showNavBar}>
          <img src={menu} alt="" />
        </button>
      <div id={navBarId}>
        <nav>
          <NavLink to={'/criador'}>Quem é o criador?</NavLink>
          <NavLink to={'/tecnologias'}>Tecnologias Ultilizadas</NavLink>
        </nav>
      </div>
     
   </HeaderContainer>
  )
}