import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    section {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      padding-bottom: 2rem;
      padding-left: 1rem;
      padding-right: 1rem;
      width: 80%;
      background-color: ${props => props.theme["background"]};
      border-radius: 15px;
      box-shadow: 2px 5px 8px ${props => props.theme["shadow-color"]};
      span {
        display: flex;
        flex-direction: column;
        &:not(p) {
          align-items: center;
        }
      } 
      span > h1, h2{
        margin-top: 1.5rem;
        margin-bottom: 10px;
        color: ${props => props.theme["template-red"]};
       }
       span > img{
        height: 20rem;
        width: 20rem;
        border-radius: 20px;
        border: 4px solid ${props => props.theme["template-red"]};
       }
       span > p {
        text-align: left;
       }

    }


`