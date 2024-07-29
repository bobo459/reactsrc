import { useRef } from "react";

export function ReactRef() {
  console.log("ReactRef 렌더링");
  const inputRef = useRef(null);
  const h3Ref = useRef(null);
  return (
    <>
      <div>
        {/* ref 고정값이라 변경하면 안되고 그대로 사용해야한다. */}
        <input ref={inputRef}></input>
        {/* inputRef 가 아니라 .current가 input의 값을 가지고 있는 것이라 주의필요*/}
        <button onClick={() => inputRef.current.focus()}>
          입력창에 포커스
        </button>
        <h3 ref={h3Ref}></h3>
        <button
          onClick={() => {
            h3Ref.current.textContent = "테스트";
          }}
        >
          h3태그에 텍스트 입력
        </button>
      </div>
    </>
  );
}
