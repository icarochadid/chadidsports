import styled from 'styled-components'
export const Container = styled.div`
display: flex;
align-items: center;
`
export const LoginContainer = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    min-width: 40%;
    
    div{
        margin-top: -13rem;
        background-color: transparent;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        width: 98%;
        height: 80%;
    div{ 
        
         img{
                margin-top: 9.2rem;
                max-width: 15rem;
                max-height: 15rem;
            }}
    h1{     font-weight: 900;
            font-size: 35px;
            color: ${props=> props.theme.title};
    }
    form{
       
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-top: -5rem;
        gap: 2rem;

    input:not([type= 'submit']){
        width: 97%;
        background-color: ${props=> props.theme['input-color']};
        outline: none;
        border: 0;
        padding: 10px;
        border-radius: 10px;
        height: 2.7rem;
        color: ${props => props.theme.placeholder} ;
        font-weight: bolder;
        box-shadow: 4px 4px 3px ${props => props.theme['shadow-color']};
       
    &::placeholder{
        color: ${props => props.theme.placeholder};
        font-weight: bolder;
    }}
    input[type="submit"] {
        height: 2.7rem;
        width: 90%;
        
        border: 0;
        border-radius: 10px;
        
        font-weight: 900;
        font-size: 20px;
        box-shadow: 4px 4px 3px ${props => props.theme['shadow-color']};
        color: ${props=> props.theme['input-color']};
        background-color: ${props => props.theme['template-red']};

    &:hover{
    color: ${props=> props.theme['button-font-color']};
    background-color: ${props => props.theme['input-color']};
    border: 3px solid ${props=> props.theme['template-red']};
    cursor: pointer;
    transition: 0.5s;
    }}
    p{
        color: ${props=> props.theme['title']};
        font-size:20px;
        margin-bottom: -1rem;
          a{
            color: ${props=> props.theme['title']}
        }}
}}
    button{ 
    display:flex;
        gap: 9px;
        justify-content: center;
        align-items: center;
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
        max-height: 2.1rem;
       }
    &:hover{
        cursor: pointer;
        color: ${props=> props.theme['font-color']};
        background-color: ${props => props.theme['template-red']};
        border: 3px solid ${props=> props.theme['font-color']};
        transition: 0.5s;
       }
    }
    
    @media (min-width:100px) and (max-width:812px){
        width: 100%;

        div{
            margin-top: -9rem;
            div{
                display: flex;
                align-items: center;
                margin-bottom: 1rem;
            img {
                width: 60%;
                height:60%;
            }
            }
            h1{
                font-size: 28px;
            }
            form > input, button{
                height: 2.5rem !important;
            }
            p{
                text-align: center;
                font-size: 16px !important;
            }
            
        }
    }
    @media (min-width: 830px) and (max-width:1024px ) {

        div{
            margin-top: -9rem;
            div{
 
            img {
                width: 60%;
                height:60%;
            }
            }
           
            form > input, button{
                height: 2.5rem !important;
            }
           
            
        }
    }
    @media (min-width: 1440px) {
        div{
            margin-top: -11rem;
            div{    
                margin-bottom: -4rem;
            }
            h1{
                margin-top: -7rem;
                font-size: 3rem;
            }
            form > input:not([type=submit]) {
                margin-bottom: 1.5rem;
            }
        }   
    }
    @media (min-width: 1920px) {
        div{
            margin-top: -11rem;
            div{    
                margin-bottom: -4rem;
                img{
                    width: 350%;
                    height: 250%;
                }
            }
            h1{
                margin-top: -7rem;
                font-size: 5rem;
            }
            form > input:not([type=submit]) {
                margin-bottom: 1.5rem;
            }
        }   
    }
`