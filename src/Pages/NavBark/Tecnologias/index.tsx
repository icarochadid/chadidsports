import firebase from '../../../assets/tecnologies/logofirebase.png'
import typescript from '../../../assets/tecnologies/TypeScriptLogo.png'
import react from '../../../assets/tecnologies/reactlogo.png'
import styledcomponents from '../../../assets/tecnologies/styledcomponentslogo.png'
import stripe from '../../../assets/tecnologies/stripelogo.png'
import reacthookform from '../../../assets/tecnologies/reacthookformlogo.png'
import reactrouterdom from '../../../assets/tecnologies/reactrouterdomlogo.png'
import { Container, Description, Title } from './styled'
import { Header } from '../../../components/Header'
export function Tecnologies() {
  return (
    <div>
      <Header/>
      <Title>As tecnologias ultilizadas nestes projetos foram:</Title>
      <Container>
        <div>
          <img id='react' src={react} alt="" />
          <Description>
            <p><strong>Tecnologia:</strong> React JS </p>
            <p><strong>Versão:</strong>18.2.0 </p>
            <p><a href="https://pt-br.reactjs.org" target="_blank">Conheça mais sobre</a></p>
          </Description>
        </div>
        
        <div>
          <img id='typescript' src={typescript} alt="" />
           <Description>
            <p><strong>Tecnologia:</strong>Typescript </p>
            <p><strong>Versão:</strong> 4.9.3 </p>
            <p><a href="https://www.typescriptlang.org" target='_blank'>Conheça mais sobre</a></p>
          </Description>
        </div>
        
        <div>
          <img id='styled-components' src={styledcomponents} alt="" />
         <Description> 
            <p><strong>Tecnologia:</strong> Styled Components</p>
            <p><strong>Versão:</strong>5.3.6 </p>
            <p><a href="https://styled-components.com" target='_blank'>Conheça mais sobre</a></p>
          </Description>
        </div>
        
        <div>
          <img id='react-hook-form' src={reacthookform} alt="" />
           <Description>
            <p><strong>Tecnologia:</strong> React-Hook-Form </p>
            <p><strong>Versão:</strong>7.43.1 </p>
            <p><a href="https://react-hook-form.com" target='_blank'>Conheça mais sobre</a></p>
          </Description>
        </div>
        
        <div>
          <img id='react-router-dom' src={reactrouterdom} alt="" />
         <Description>
            <p><strong>Tecnologia:</strong> React-Router-Dom </p>
            <p><strong>Versão:</strong> 6.8.1</p>
            <p><a href="https://reactrouter.com/en/main" target='_blank'>Conheça mais sobre</a></p>
          </Description>
        </div>
        
        <div>
          <img id='stripe' src={stripe} alt="" />
           <Description>
            <p><strong>Tecnologia:</strong> Stripe </p>
            <p><strong>Versão:</strong>1.47.0 </p>
            <p><a href="https://stripe.com/en-br" target='_blank'>Conheça mais sobre</a></p>
          </Description>
        </div>
        
        <div>
          <img id='firebase' src={firebase} alt="" />
          <Description>
            <p><strong>Tecnologia:</strong> Firebase </p>
            <p><strong>Versão:</strong>9.17.1 </p>
            <p><a href="https://firebase.google.com/?hl=pt-br" target='_blank'>Conheça mais sobre</a></p>
          </Description>
        </div>

      </Container>
    </div>
  )
}