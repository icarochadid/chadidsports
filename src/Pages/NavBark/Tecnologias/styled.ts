import styled from 'styled-components'
export const Title = styled.h1`
  color: ${props => props.theme.title};
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:2rem;
  div{
    background-color: ${props => props.theme.background};
    box-shadow: 3px 3px 5px ${props => props.theme['shadow-color']};
    width: 60%;
    padding: 1rem;
    border-radius: 10px;
    display: flex
  };
  #react{
    width: 10rem;
    height: 8rem;
    
  }
  #typescript{
    width: 8rem;
    height: 8rem;
  }
  #styled-components{
    width: 10rem;
    height: 7rem;
  }
  #react-hook-form{
    width: 8rem;
    height: 8rem;
  }
  #react-router-dom{
    width:12rem;
    height: 6rem;
  }
  #stripe{
    width: 12rem;
    height: 6rem;
  }
  #firebase{
    width: 6rem;
    height: 8rem;
    margin-left: 1rem;
  }

`
export const Description = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  margin-left: 2rem;
  strong {
    color: ${props => props.theme['template-red']};
  }
  font-weight: bolder;
  a{
    color: ${props => props.theme['template-red']};
  }

`