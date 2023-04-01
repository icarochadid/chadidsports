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
`

