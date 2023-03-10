import styled from 'styled-components';
export const HeaderContainer = styled.header`
  background-color: ${props => props.theme['template-red']};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7rem;
  
  img{
    margin-top: 2rem;
    width: 15rem;
    height: 15rem;
  }
  
  nav > a {
    color: ${props => props.theme['font-color']};
    text-decoration: none;
    margin-right: 2rem;
    text-shadow: 4px 4px 7px black;

    &:hover{
      text-shadow: 6px 6px 8px black;
      font-size: 18px;
      transition: 0.4s;
      
    }
  }
`