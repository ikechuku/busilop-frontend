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
  background-color: #f2f8ff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  a {
    margin: 20px;
  }
`;

export const SectionOne = styled.section`
  border-bottom: 1px solid rgba(112, 112, 112, 0.1);
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
  animation: ${ascend} 3s linear 0s 1;
`;
