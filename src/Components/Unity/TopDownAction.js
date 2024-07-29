import { useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styled from "styled-components";

const Container = styled.div`
  width: 1344px;
  height: 756px;
  margin: auto;
  border: 1px solid gray;
`;
export function TopDownAction() {
  const [playingGame, setPlayingGame] = useState(false);

  const { unityProvider, sendMessage } = useUnityContext({
    // https://react-unity-webgl.dev/docs/getting-started/hello-world 경로의 내용을 복붙해서 파일이름을 로컬로 저장한 이름으로 변경해준다.
    loaderUrl: "build/Build.loader.js",
    dataUrl: "build/Build.data",
    frameworkUrl: "build/Build.framework.js",
    codeUrl: "build/Build.wasm",
  });

  return (
    <>
      <h1>Top Down Action Game</h1>
      <button onClick={() => setPlayingGame(true)}>Start Game</button>
      <button onClick={() => sendMessage("Player", "Attack")}>Attack</button>
      <Container>
        {playingGame ? (
          <Unity
            unityProvider={unityProvider}
            style={{ width: "100%", height: "100%" }}
          />
        ) : null}
      </Container>
    </>
  );
}
