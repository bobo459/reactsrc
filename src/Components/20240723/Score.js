import { Children } from "react";
import styled from "styled-components"

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
  text-align: center;
`;
const Table = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export function Score({firstName, score:{math, english, history}, children,}){
  return (
    <>
      <Container>
        <h1>{firstName}</h1>
        <table>
          <h3>Math</h3>
          <p>{math}</p>
          <h3>English</h3>
          <p>{english}</p>
          <h3>History</h3>
          <p>{history}</p>
        </table>
        {children}
      </Container>
    </>
  );
}