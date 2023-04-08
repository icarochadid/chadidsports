import styled from 'styled-components'

export const ImageContainer = styled.div` 
overflow: hidden;
width: 60%;
background-color: ${props => props.theme['template-red']};
 img{
    width: 100%;
    height: 100%;
 }
 @media(max-width: 679px) {
   display: none;
 }
 @media(min-width: 1024) {
  height: 100vh;
  overflow: visible;

 }
`
