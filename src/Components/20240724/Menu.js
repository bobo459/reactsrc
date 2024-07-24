import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
const Li = styled.li`
  width: 100%;
  padding-left: 20px;
  list-style: none;
  font-weight: 700;
`;
const Link = styled.a`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.7);
  padding: 0 5px;
  &:hover {
    //& : this 라는 의미이다.  나의 뒤에 hover 가 붙으면 이렇게 해줘 라는 의미
    background-color: dodgerblue;
    color: white;
  }
`;

export function Menu() {
  return (
    <>
      <Container>
        <Ul>
          <Li>
            <Link href="#">Homo</Link>
          </Li>
          <Li>
            <Link href="#">Content</Link>
          </Li>
          <Li>
            <Link href="#">About Us</Link>
          </Li>
          <Li>
            <Link href="#">Contact</Link>
          </Li>
          <Li>
            <Link href="#">Social</Link>
          </Li>
        </Ul>
      </Container>
    </>
  );
}
