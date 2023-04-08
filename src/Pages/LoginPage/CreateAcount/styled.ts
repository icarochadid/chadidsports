import styled from 'styled-components'
export const Container = styled.div`
display: flex;
`
export const CreateAccountContainer = styled.section`
height: 100vh;
width: 40%;
div {
    margin-top: 5rem
    margin-bottom: 1rem;
    img{
    width: 50%;
    height: 50%;
}
} 
form  {
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h1 {
        color: ${props => props.theme.title};
        font-size: 2.8rem
    }
    input:not(#createaccount){
        width: 90%;
        height: 2.5rem;
        border:0;
        background: ${props => props.theme['input-color']};
        box-shadow: 3px 3px 5px ${props => props.theme['shadow-color']};
        border-radius: 8px;
        margin-top:1.7rem;
        font-weight: bolder;
        padding-left: 10px;
        padding-right: 10px
        color: ${props => props.theme['placeholder']};
        &::placeholder {
        color: ${props => props.theme['placeholder']};
        }
        &:focus{
        outline: 0px
        }
    }
    #createaccount{
        margin-top: 2rem;
        width:90%;
        height: 2.5rem;
        border: none;
        color: ${props => props.theme['font-color']};
        background: ${props => props.theme['template-red']};
        font-size: 1.4rem;
        font-weight: bolder;
        border-radius:8px;
          &:hover{
            cursor: pointer;
            color: ${props=> props.theme['template-red']};
            background-color: ${props => props.theme['font-color']};
            border: 3px solid ${props=> props.theme['template-red']};
            transition: 0.5s;
       }
    }
    p{
        font-size: 20px;
        margin-top: 1rem;
        color: ${props => props.theme['template-red']};
        a{
        color: ${props => props.theme['template-red']};

        }
    }
    button{ 
        display:flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        height: 3rem;
        width: 90%;
        background-color: ${props => props.theme['input-color']};
        border: 3px solid ${props=> props.theme['title']};
        border-radius: 10px;
        color: ${props=> props.theme['button-font-color']};
        font-weight: 900;
        font-size: 20px;
        box-shadow: 4px 4px 3px ${props => props.theme['shadow-color']};
       img{
        width: 2.1rem;
        height: 2.1rem;
       }
    &:hover{
        cursor: pointer;
        color: ${props=> props.theme['font-color']};
        background-color: ${props => props.theme['template-red']};
        border: 3px solid ${props=> props.theme['font-color']};
        transition: 0.5s;
       }
    } 
}
@media(max-width:480px) {
   margin-top: 0px;
   min-width: 100%;
   margin-bottom: 3rem;
   div{
    margin-top: 1rem;
    img{
        display: block;
        margin: auto;
    }
   }
     
   form{
    
    h1{
        font-size: 2rem;
        text-align: center;
    }
    p{
        text-align: center;
    }
   }
}

@media(min-width: 1020px){
    div {   
        margin-top: 0px;
    }
    
}
`
