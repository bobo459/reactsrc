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

//20240724
import { Home } from "./Components/20240724/Home";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
