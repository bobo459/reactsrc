import { useState } from "react";
import styled from "styled-components";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";

const Container = styled.div``;
const Menu = styled.div`
  display: flex;
`;
const Body = styled.div``;

export function BasicRouter() {
  const [view, setView] = useState("home"); //초기값을 home으로
  function renderView() {
    switch (view) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  }
  return (
    <>
      <Container>
        <Menu>
          <button onClick={() => setView("home")}>Home</button>
          <button onClick={() => setView("about")}>About</button>
          <button onClick={() => setView("contact")}>Contact</button>
        </Menu>
        <Body>{renderView()}</Body>
      </Container>
    </>
  );
}