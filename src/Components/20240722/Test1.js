import styled from "styled-components"

//const 스타일링태그이름 =styled.원래태그이름` `
//예) const Container = styled.div `
//    width :100px;
//    height:100px;
//     `
const Box = styled.div`
  width: 500px;
  height: 400px;
  background-color: dodgerblue;
  margin: auto;
`

export function Test1(){
  return<>
  <Box>Test1</Box>
  </>
}
