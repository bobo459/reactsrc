import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getMovieDetailById, getMovieCreditById, IMG_PATH } from "./api";
import styled from "styled-components";
import { IconBack } from "./icons";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  margin: 20px;
  color: dodgerblue;
  text-align: center;
  position: relative;
`;
const Back = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
`;
const Img = styled.img`
  width: 100%;
`;
const Content = styled.div`
  font-size: 1rem;
  line-height: 30px;
  color: #333;
`;

export function Movie() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [credit, setCredit] = useState(null);
  const navigate = useNavigate(null);

  useEffect(() => {
    getMovieInfo();
  }, []);

  async function getMovieInfo() {
    try {
      let response = await getMovieDetailById(id);
      console.log(response);
      setDetail(response.data);
      response = await getMovieCreditById(id);
      console.log(response);
      setCredit(response.data);
    } catch (error) {
      console.log("Error", error);
    }
  }

  return (
    <Container>
      {detail && credit && (
        <>
          <Header>
            <h1>{detail.title}</h1>
            <Back onClick={() => navigate(-1)}>
              {/* Icon의 SVG를 사용시 가독성을 위해 따로 js 파일을 만들어서 불러와 사용한다. */}
              <IconBack />
              {/* BACK */}
              {/* <Link to="/movie">BACK</Link> */}
            </Back>
          </Header>
          <Img src={IMG_PATH + detail.backdrop_path} />
          <Content>
            <p>
              <b>타이틀</b> : {detail.title}
            </p>
            <p>
              <b>장르</b> :{" "}
              {detail.genres
                .map((g) => g.name)
                .filter((name) => name)
                .join(", ")}
            </p>
            <p>
              <b>개봉일</b> : {detail.release_date}
            </p>
            <p>
              <b>상영시간</b> : {detail.runtime + "분"}
            </p>
            <p>
              <b>감독</b> :{" "}
              {credit.crew
                .filter((c) => c.job == "Director")
                .map((c) => c.name)
                .filter((name) => name)
                .join(", ")}
            </p>
            <p>
              <b>배우</b> :{" "}
              {credit.cast
                .slice(0, 10)
                .map((c) => c.name)
                .filter((name) => name)
                .join(", ")}
            </p>
            <hr />
            <p>{detail.overview}</p>
          </Content>
          <br />
          <br />
          <br />
          <br />
        </>
      )}
    </Container>
  );
}
