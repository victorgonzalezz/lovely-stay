import styled from "styled-components";

export const Container = styled.div`

flex: 1;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;

`;

export const Card = styled.div`
    padding: 23px;
    background: aquamarine;
    border: 2px solid;
    border-radius: 10px;
    max-width: 500px;
    display: flex;
    
   img {
     border-radius: 50% !important;
     border: 2px solid;
     height: 40%;
  
     border-radius: 10px;
     position: relative;

     span {
      font-weight: 600 !important;
      font-family: sans-serif !important;
     }
   } 

  
`;