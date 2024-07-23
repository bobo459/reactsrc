import styled from "styled-components";
// import "./Test2.css"

const w = 300;
const h = 200;

const Box = styled.div`
  width: ${w}px;
  height: ${h}px;
  background-color: khaki;
  margin: auto;
`
// const Input = styled.input`
//    이런식으로 내용을 넣어주면 된다.
// `

export function Test2(){
  return(
  <>
  <Box>Test2</Box>
  </>
  );
}
//css는 지워준다.
// export function Test2(){
//   return(
//   <>
//   <div className="box">Test2</div>
//   </>
//   );
// }