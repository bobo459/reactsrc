import { useEffect, useState } from "react";
import styled from "styled-components";
import axios, { Axios } from "axios";

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
  padding: 30px;
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
  const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    // setIcon("04d");
    // setTemp(28);
    // setCity("Deajeon");
    // setWeather("Clouds");
    navigator.geolocation.getCurrentPosition(geoOK, geoError);
  }, []); //최초 1회만 실행

  function geoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    // 2.Axios사용법(Promise~then)
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        console.log(data);
        setCity(data.name);
        setTemp(parseInt(data.main.temp));
        setIcon(data.weather[0].icon);
        setWeather(data.weather[0].main);
      })
      .catch((error) => {
        console.log("요청이 실패했습니다.", error);
      });

    // 3.fetch 사용법
  //   fetch(url)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setCity(data.name);
  //       setTemp(parseInt(data.main.temp));
  //       setIcon(data.weather[0].icon);
  //       setWeather(data.weather[0].main);
  //     })
  //     .catch((error) => {
  //       console.log("요청이 실패했습니다.", error);
  //     });
   }
  function geoError() {
    alert("현재 위치정보를 찾을수 없습니다.");
  }

  return (
    <>
      <Container>
        <Card>
          <Icon>
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
          </Icon>
          <Weather>
            <Temp>
              {temp}
              {/* https://cdnjs.com/libraries/tabler-icons
자바스크립트에서 사용하는 외부 라이브러리 링크 주소를 검색하기 위해 CDN을 찾아야 함.
검색 : “ tabler icons cdn ”
CDN이란,  Content Distribution Network 의 약자
컨텐츠 분산 네트워크 = 웹에서 사용하는 여러 라이브러리를 지역마다 제공해주는 서버를 분산하여 설치한 네트워크 */}
              <i className="ti ti-temperature-celsius"></i>
            </Temp>
            <City>{city}</City>
            <Info>{weather}</Info>
          </Weather>
        </Card>
      </Container>
    </>
  );
}
