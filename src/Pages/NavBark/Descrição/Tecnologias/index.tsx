import firebase from '../../../../assets/tecnologies/firebaselogo.png'
import typescript from '../../../../assets/tecnologies/TypeScriptLogo.png'
import react from '../../../../assets/tecnologies/reactlogo.png'
import styledcomponents from '../../../../assets/tecnologies/styledcomponentslogo.png'
import stripe from '../../../../assets/tecnologies/stripelogo.png'
import reacthookform from '../../../../assets/tecnologies/reacthookformlogo.png'
import reactrouterdom from '../../../../assets/tecnologies/reactrouterdomlogo.png'
import { Header } from '../../../../components/Header'
import { Container, Title } from './styled'
export function Tecnologies() {
  return (
    <div>
      <Header/>
      <Title>As tecnologias ultilizadas nestes projetos foram:</Title>
      <Container>
        <div><img id='react' src={react} alt=""/></div>
        <div><img id='typescript' src={typescript} alt="" /></div>
        <div><img id='styled-components' src={styledcomponents} alt="" /></div>
        <div><img id='react-hook-form' src={reacthookform} alt="" /></div>
        <div><img id='react-router-dom' src={reactrouterdom} alt="" /></div>
        <div><img id='stripe' src={stripe} alt="" /></div>
        <div><img id='firebase' src={firebase} alt="" /></div>

      </Container>
    </div>
  )
}