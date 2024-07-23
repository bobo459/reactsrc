import styled from "styled-components";
import { useState, useEffect } from "react";



const Container = styled.div`
width: 500px;
text-align: center;
margin: 0 auto;
//Container의 자식의 h1을 이렇게 변경하라는 문구
h1{
font-size: 4rem;
}
button{
  width: 100px;
  font-size: 2rem;
  margin: 10px;
}
`;

export function CounterState(){
  console.log("CounterState start.");
  // let count = 0;
  const [ count, setCount ] = useState(0);  //useState(0): 초기값

  function minus(){
    //count = count -1;
    setCount(count - 1);
    console.log("minus",count);
  }
  function plus(){
    // count = count +1;
    setCount(count + 1);
    console.log("plus",count);
  }
  console.log("CounterState end.",count);
  
  useEffect(()=>{
    console.log("useEffect",count);
  }, [count]); //매개변수1은 콜백함수, 매개변수2는 상태 의존성배열
  
  return(
  <>
  <Container>
    <h1>{count}</h1>    {/* {count}상태관리 */}
    <button onClick={minus}>-</button>
    <button onClick={plus}>+</button>
  </Container>
  </>);
}