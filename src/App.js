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

import { Test1 } from "./Components/20240722/Test1";
import { Test2 } from "./Components/20240722/Test2";
import { ListWrapper } from "./Components/20240722/ListWrapper";
import { AvatarWrapper } from "./Components/20240723/AvatarWrapper";
import { ScoreWrapper } from "./Components/20240723/ScoreWrapper";
import { CounterState } from "./Components/20240723/CounterState";
function App() {
  return (
    <>
    <CounterState />

    </>
  );
}

export default App;
