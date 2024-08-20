import styled from "styled-components";

export const NotFoundBody = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  margin: 0;
  background: #131313;
  color: #fff;
  font-family: 'Fira Mono', monospace;
  position: absolute;
  top: 0;
  left: 0;
`;

export const NotFoundContainer = styled.div`
   margin: 0;
   text-align: center;

   h1, p, a {
    margin: 0;
    margin-bottom: 12px;
   }

   a {
    color: white;
    margin-top: 1rem;
   }

   h1 {
    animation: glitchTop 1s linear infinite;
    font-size: 96px;
    letter-spacing: -7px;
   }

    h1:before,
    h1:after{
      content: '';
      position: absolute;
      left: 0;
    }

    h1:before{
      clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    }

    h1:after{
      animation: glitchBottom 1.5s linear infinite;
      clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
      -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    }
`;