import { createGlobalStyle } from 'styled-components';

 const GlobalStyle = createGlobalStyle`
 :root {
   --text-color: #001219;
   --backgroundPrimary: #0A9396;
   --backgroundSecondary: #94D2BD;
   --white: #FFF;
 }
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  body {
    height: 100%;

  }

  .App {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: white;
  }
`;

export default GlobalStyle;