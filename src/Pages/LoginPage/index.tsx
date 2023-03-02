import { useContext } from 'react'
import SportsImage from '../../assets/loginimage.jpeg'
import { ImageContainer } from './styles'
export function ImageLogin() { 
 
    return (
        
            <ImageContainer>
            <img src={SportsImage} alt="" />
            </ImageContainer>       
     
    )
}