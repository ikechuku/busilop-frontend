import styled, { keyframes, css } from "styled-components";

const ascend = keyframes`
  from {
    transform: translateY(20px);
    opacity:0;
  }

  to {
    transform: translateY(0);
    opacity:1;
  }
`;

export const Container = styled.div`
  box-sizing: border-box;
  /* background-color: #222831; */
  width: 100%;
  height: 100vh;
  /* color: white; */
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* border: solid 2px red; */
  /* padding: 10px; */
    
    .card{
      width: 90%;
    }
  .nav{
    width:100%;
    height: 5rem;
    padding-top: 2rem;
    text-align: center;
    h2{
      color: white;
    }
  }

`;

export const SectionOne = styled.section`
  border-bottom: 1px solid rg ba(112, 112, 112, 0.1);
  padding: 12px;
  ${({ noborder }) =>
    noborder &&
    css`
      border: none;
    `}
  ${({ nopad }) =>
    nopad &&
    css`
      padding-top: 0;
    `}
`;

export const BigTitle = styled.h1`
  font-size: 3.75rem;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.35;
  letter-spacing: normal;
  text-align: center;
  color: #1f2023;
  margin: auto;
  font-family: "Inter";
  animation: ${ascend} 2s linear 0s 1;
`;

export const BigSubTitle = styled.h2`
  max-width: 736px;
  font-size: 1.5625rem;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: center;
  color: #545969;
  margin: 20px auto 0;
  font-family: "Inter";
  animation: ${ascend} 0.6s linear 0s 1;
`;



export const StepForm = styled.div`
width: 100%;
/* max-width: 520px; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: solid 1px yellow;
height: 50vh;
padding: 1.5rem;
margin-bottom: 3rem;

.frontend{
  
}
`
