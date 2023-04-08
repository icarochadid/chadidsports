import styled from 'styled-components'
import basquete from '../../assets/MenuPageImages/basquete.jpg'
import futebol from '../../assets/MenuPageImages/futebol.jpg'
import boxe from '../../assets/MenuPageImages/boxe.jpg'
import futebolamericano from '../../assets/MenuPageImages/futebolamericano.jpg'
import natação from '../../assets/MenuPageImages/natação.jpg'

export const Title = styled.div`
margin-top: 3rem;
color: ${props => props.theme.title};
font-size: 35px;
text-align:center;
`   
export const ModalitiesContanainer = styled.span`
display: flex;
justify-content: center;
gap: 3rem;
margin-top: 5rem;

@media(max-width:480px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
    
}
`;
export const Futebol = styled.div`
    background-image: url(${futebol});
    background-size: cover;
    width: 12rem;
    transform: scale(1,1);
    height: 12rem;
    filter: grayscale(80%);
    border-radius: 10px;
    button{
        background-color:transparent;
        border: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        h1{
        color: black;
        text-shadow: 1px 1px 1px white;
     }
    }
    &:hover{
        transition: 0.2s;
        filter: none;
        border: 3px solid ${props => props.theme['template-red']};
        transform: scale(1,1);
        width: 13rem;
        height: 13rem;
    }
`;
export const Basquete = styled.div`
 background-image: url(${basquete});
 background-position: center right;
    background-size: cover;
    width: 12rem;
    transform: scale(1,1);
    height: 12rem;
    filter: grayscale(80%);
    border-radius: 10px;
    button{
        background-color:transparent;
        border: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        h1{
        color: black;
        text-shadow: 1px 1px 1px white;
     }
    }
    &:hover{
        transition: 0.2s;
        filter: none;
        border: 3px solid ${props => props.theme['template-red']};
        transform: scale(1,1);
        width: 13rem;
        height: 13rem;
    }
`;
export const Boxe = styled.div`
 background-image: url(${boxe});
    background-size: cover;
    width: 12rem;
    height: 12rem;
    transform: scale(1,1);
    filter: grayscale(80%);
    border-radius: 10px;
    button{
        background-color:transparent;
        border: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        h1{
        color: black;
        text-shadow: 1px 1px 1px white;
     }
    }
    &:hover{
        transition: 0.2s;
        filter: none;
        border: 3px solid ${props => props.theme['template-red']};
        transform: scale(1,1);
        width: 13rem;
        height: 13rem;
    }
`;
export const Natação = styled.div`
 background-image: url(${natação});
 background-position: center right;
    background-size: cover;
    width: 12rem;
    height: 12rem;
    transform: scale(1,1);
    filter: grayscale(80%);
    border-radius: 10px;
    button{
        background-color:transparent;
        border: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        h1{
        color: black;
        text-shadow: 1px 1px 1px white;
     }
    }
    &:hover{
        transition: 0.2s;
        filter: none;
        border: 3px solid ${props => props.theme['template-red']};
        transform: scale(1,1);
        width: 13rem;
        height: 13rem;
    }
`;
export const FutebolAmericano = styled.div`
    background-image: url(${futebolamericano});
    background-position: center center;
    background-size: cover;
    width: 12rem;
    height: 12rem;
    transform: scale(1,1);
   
    filter: grayscale(80%);
    border-radius: 10px;
    button{
        background-color:transparent;
        border: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
     h1{
        color: black;
        text-shadow: 1px 1px 1px white;
     }
    }
    &:hover{
        transition: 0.2s;
        filter: none;
        border: 3px solid ${props => props.theme['template-red']};
        transform: scale(1,1);
        width: 13rem;
        height: 13rem;
    }
`