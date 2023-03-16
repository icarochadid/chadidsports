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
    border: 2px solid ${props => props.theme['template-red']};
    width: 60%;
    border-radius: 10px;
    

  };
  #react{
    width: 15rem;
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
    height: 10rem;
    margin-right: 4rem;
  }

`