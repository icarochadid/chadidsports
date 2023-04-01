import styled from 'styled-components'

export const ImageContainer = styled.div` 
overflow: hidden;
 img{
    width: 100%;
    height: 100%;
 }
  @media (min-width: 100px) and (max-width:812px){
    display: none;
    }
 @media (min-width: 815px) and (max-width:1920px){
    height: 100vh;
    width: 90%;
    }
`
