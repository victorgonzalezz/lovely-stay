import styled from "styled-components";

export const Container = styled.div`
flex: 1;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;

`;

export const InputGroup = styled.div`
  height: 40px;
  border: 1px solid var(--text-color);
  border-radius: 10px;
  display: flex;
  
  input {
    border: 0;
    background: transparent;
    outline: 0;
    padding: 8px;
  }
  button {
    border: 0;
    border-radius: 0 10px 10px 0;
    padding:  0 8px;
  }
`;