import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'NotoSerifKR-Medium';
    line-height: 1.6;
  }

  h1 {
    font-family: 'NotoSerifKR-Medium';
    line-height: 1.6;
  }
  
`;

export const Layout = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  min-width: 375px;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  max-height: 824px;
  color: #333;
`;
