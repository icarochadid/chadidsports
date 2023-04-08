import styled from 'styled-components'

export const ContainerList = styled.div`
display: grid;
grid-template-columns: 200px 200px 200px;
margin-top: 50px;
justify-items: center;
align-items: center;
justify-content: space-around;

div{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 350px;
    height: 400px;
    img{
        width: 250px;
        height: 300px;
    }
    p{
        text-align: center;
        font-size: 18px;
        font-weight: bolder;
        color: ${props => props.theme['template-red']};
    }
    #price {
        color: black;
        margin-top: 10px;
    }
    button {
        width: 60%;
        min-height: 2.8rem;
        font-size: 15px;
        font-weight: bold;
        margin-top: 30px;
        border: none;
        border-radius: 50px;
        color: ${props => props.theme['font-color']};
        background-color: ${props => props.theme['template-red']};

        &:hover{
        color: ${props => props.theme['template-red']};
        background-color: ${props => props.theme['font-color']};
        border: 3px solid ${props => props.theme['template-red']};
        transition: 0.3s;
        cursor: pointer;
        }

    }
}
 
@media (max-width: 480px) {
    display: flex;
    flex-direction: column;

    div{
        width: 80%;
    }
}
`