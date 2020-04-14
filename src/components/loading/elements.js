import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
      transform: rotate(0deg)
    }
  to {
      transform: rotate(360deg)
      }
`;

const fadeIn = keyframes`
  from {
    transform: translateY(5px);
    opacity:0;
  }

  to {
   transform: translateY(0px);
   opacity:1;
  }
`;

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f8f9;
  width: 100%;
  height: 100%;
  animation: ${fadeIn} 0.5s linear;
  transition: all 100ms linear;
`;

export const Loader = styled.div`
  width: 2.5em;
  height: 2.5em;
  position: relative;
  margin: 0;

  .xyz-in,
  .xyz-out {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    margin-left: 4px;
    margin-top: 4px;
  }
  .xyz-out {
    border: 3px solid #727981;
    opacity: 0.2;
  }
  .xyz-in {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border-top: 3px solid #00b3e4;
    border-right: 3px solid transparent !important;
    border-bottom: 3px solid transparent !important;
    border-left: 3px solid transparent !important;
    animation: ${rotate} 0.7s linear infinite;
  }
`;
