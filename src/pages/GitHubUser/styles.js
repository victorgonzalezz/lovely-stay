import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;

  a {
    font-size: 24px;
    font-weight: bold;
  }
  .loading {
    font-size: 68px;
  }
`;

export const Card = styled.div`
  padding: 23px;
  background: var(--backgroundSecondary);
  border: 2px solid;
  border-radius: 10px;
  max-width: 500px;
  display: flex;
  flex-direction: column;

  h4 {
  padding: 8px 0;
  margin-bottom: 15px;
  }
`;
export const InsideCard = styled.div`
gap: 10px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 5px 0;
 margin-top: 8px;


 img {
    border-radius: 50% !important;
    border: 2px solid;
    height: 200px;
    width: 200px;

    border-radius: 20px;
  }
  span {
      font-weight: 600 !important;
      font-family: sans-serif !important;
    } 
 `;
 export const ListRepo = styled.ul`
 height: 300px;
 overflow-y: auto;

 li {
   display: flex;
   flex-direction: column;
   gap: 6px;
   margin-bottom: 12px;
  padding-right: 7px;
 }

`;

