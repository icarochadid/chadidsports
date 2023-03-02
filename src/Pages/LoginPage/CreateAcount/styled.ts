import styled from 'styled-components'
export const Container = styled.div`
display: flex;
`
export const CreateAccountContainer = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 40%;
    
    div{
        //margin-top: -13rem;
        margin-bottom: 2.5rem;
        background-color: transparent;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        width: 98%;
        height: 80%;    
        div {
        margin-top: -3rem;
        margin-bottom: -1rem;
        
        
        h1 > img{
                margin-top: -1rem;
                max-width: 15rem;
                max-height: 15rem;
            } }
        h1{     
            font-weight: 900;
            font-size: 35px;
            color: ${props=> props.theme.title}; }
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
        margin-top: -1rem;
        a{
            color: ${props=> props.theme['title']};
            text-decoration: underline;

        }
    }
}}
button{ display:flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        margin-bottom: 3rem;
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
`
