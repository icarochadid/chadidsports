import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  section{
    margin-top: 1.5rem;
    background-color: ${props => props.theme.background};
    width: 80%;
    border-radius: 15px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 4px 4px 7px ${props => props.theme['shadow-color']};

    img{
      width: 8rem;
      height: 8rem;
      margin-bottom: 3rem;
    }
    h1{
      color: ${props => props.theme['template-red']}
    }

    div {
      display: flex;
      width: 50%;
      justify-content: space-around;
      button{
      margin-top: 3rem;
    
      width: 15rem;
      height: 3rem;
      border-radius: 50px;
      border: none;
      background-color: ${props => props.theme['template-red']};
      color: ${props => props.theme['font-color']};
      font-weight: bold;
      cursor: pointer;
      &:hover{
      background-color: ${props => props.theme['input-color']};
      color: ${props => props.theme['template-red']};
      border: 2px solid ${props => props.theme['template-red']};
      transition: 0.2s;
      
      }
    }
    }
  }
  @media (max-width: 480px) {
    section {
      text-align: center;
      width: 94%;
      margin-bottom: 4rem;
      padding-bottom: 2rem;
      img{
      width: 5rem;
      height: 5rem;
    }
    h1{
      font-size: 18px;
      margin-bottom: 1rem;
    }
    }
    div{
      flex-direction: column;
      align-items: center;
      
      button {
        margin-bottom: -1rem;
      }
    }
  }
`