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
    background-image: url("https://media-exp1.licdn.com/dms/image/C4E0BAQGneJ-rTqRbTA/company-logo_200_200/0/1635773460397?e=2147483647&v=beta&t=quuWQooiOl2DoGh2WOVB_ECDpwh8bSGUGr9YIfUM6eg")
  }
`;

export default GlobalStyle;