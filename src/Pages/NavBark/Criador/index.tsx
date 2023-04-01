import { Header } from "../../../components/Header";
import creator from '../../../assets/creatorphoto.jpeg'
import { Container } from "./styled";

export function Creator() {
  return ( 
    <>
    <Header />
    <Container>
      <section>
          <span>
            <h1>Quem sou eu?</h1>
            <img src={creator} alt="" />
            <h2>Profissão</h2>
             
            <p>Olá, meu nome é Icaro Chadid e eu sou um programador front-end ReactJS Júnior. Em janeiro de 2022 iniciei meus estudos na programção pelo youtube mesmo, aprendendo com o professor Gustavo Guanabara pelo canal
              Curso em Vídeo. Ao ganhar uma base sólida em HTML 5, CSS 3 e JavaScript, estava na hora de eu escolher onde me especializar.
              Então, pelo curso Ignite da RocketSeat, iniciei meus estudos em ReactJS, tecnologia esta onde eu continuo me aprodundando cada vez mais.</p>
            <h2>Motivações</h2>
            <p>Desde a infância, eu sempre tive uma profunda admiração pela tecnologia, e ao conhecer uma profissão onde eu poderia transformar a vida das pessoas para melhor atrávez de soluções tecnológicas,
              eu sabia que era uma oportunidade boa demais para deixar passar. Então tenho me dedicado dia e noite para ser o melhor
              Dev que eu puder, e sempre carrego a filosofia pessoal de que para todo problema existe uma solução, e se não existir
              uma solução, nós a programamos.</p>
            
          </span>
      </section>
    </Container>
    </>
  )
}