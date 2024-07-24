//<문제점>
//리액트는 index.html 만 사용하므로 모든 CSS스타일이 index.html에 복사됨.
//클래스 이름이 중복되는 문제 발생!
//=> 리액트의 구조와 잘 어울리는 CSS스타일링 기술이 필요

//<해법>
//1.Styled components
//2.CSS modules
//Css-in-JS
//Bootstrap
//Tailwind CSS

import { createGlobalStyle } from "styled-components";
import { Home } from "./Components/20240724/Home";
import { Openweather } from "./Components/Openweathermap/Openweathermap";

// const GlobalStyle = createGlobalStyle`
// @font-face {
//     font-family: 'GmarketSansMedium';
//     src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
//     font-weight: normal;
//     font-style: normal;
// }
// *{
// margin: 0;
// padding: 0;
// box-sizing: border-box;
// font-family: GmarketSansMedium;
// }
// `;

function App() {
  return (
    <>
       {/* <GlobalStyle /> */}
      {/* <Home />  */}
      <Openweather />
    </>
  );
}

export default App;
