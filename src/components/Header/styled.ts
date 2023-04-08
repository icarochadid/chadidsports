import styled from 'styled-components';
export const HeaderContainer = styled.header`
  background-color: ${props => props.theme['template-red']};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7rem;
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    img{
    margin-top: -1rem;
    margin-left: 1.5rem;
    width: 15rem;
    }
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
  #burguerMenu {
    display: none;
  }

  @media(max-width: 480px){
    flex-wrap: wrap;
    width: 100vw;
    height: 5rem;
    flex-direction: space-between;
    #logo{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;
      width: 8rem;
      height: 4rem;
      img{
        max-width: 100%;
        max-height: 100%;
      }
    }

    #burguerMenu {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
      margin-right: 2rem;
      width: 2rem;
      height: 2rem;
      
    img{
     width: 100%;
     height: 100%;
    }
 
  }
  #navBar {
    display: block;
    width: 100%;
    nav {
      display: flex;
      align-items: flex-end;
      justify-content: end;
      flex-direction: column;
      margin-right: -2rem;
      position: relative;
      margin-bottom: 3rem;
      a{
        background-color: ${props=> props.theme['template-red']};
        padding: 10px;
        width: 9rem;
      }
    }
  }
  #navBarClosed {
    display: none;
  }
  }
`