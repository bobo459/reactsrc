import styled from "styled-components";

const sizes = {
  //정해주는 것이 일반적?이라고 하신듯??
  mobile: "480px",
  tablet: "768px",
  desktop: "1026px",
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: 20px;

  //반응형코드가 들어감 @media screen을 사용하지만 @media 으로 적어도 문제는 없음.
  //반응형의 조건
  @media (max-width: ${sizes.mobile}) {
    grid-template-columns: 1fr;
  }
  @media (min-width: ${sizes.mobile}) and (max-width: ${sizes.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${sizes.tablet}) and (max-width: ${sizes.desktop}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: ${sizes.dasktop}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

const Box = styled.div`
  text-align: center;
  line-height: 100px;
  width: 200px;
  height: 200px;
  background-color: dodgerblue;
`;
export function ResponsivePage() {
  return (
    <>
      <Container>
        <Box>Meun1</Box>
        <Box>Meun2</Box>
        <Box>Meun3</Box>
        <Box>Meun4</Box>
        <Box>Meun5</Box>
        <Box>Meun6</Box>
      </Container>
    </>
  );
}
