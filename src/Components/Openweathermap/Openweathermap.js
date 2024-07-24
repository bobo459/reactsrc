import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  width: 500px;
  height: 300px;
  background: linear-gradient(90deg, #a18cd1, #fbc2ed);
  color: white;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Icon = styled.div`
  text-align: center;
  img {
    width: 100%;
    margin-top: 20px;
  }
`;
const Weather = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
`;
const Temp = styled.div`
  margin-top: 20px;
  font-size: 5rem;
  i {
    //외부 아이콘 섭씨표시한 'C 아이콘에 대해
    font-size: 3.5rem;
  }
`;
const City = styled.div`
  font-size: 2.5rem;
`;
const Info = styled.div`
  font-size: 1.5rem;
  margin-top: 30px;
`;

export function Openweather() {
  const API_KEY = "091aecf889d673fbee7d13eaecce9e4f"; //openweathermap.org 에서 자기 API를 복사해온것.
  return (
    <>
      <Container>
        <Card>
          <Icon></Icon>
          <Weather>
            <Temp></Temp>
            <City></City>
            <Info></Info>
          </Weather>
        </Card>
      </Container>
    </>
  );
}
