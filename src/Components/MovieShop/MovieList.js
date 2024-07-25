import { useEffect, useState } from "react";
import { getGenre, getMoviesNowPlaying, IMG_PATH } from "./api";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;
const Card = styled.div`
  //width: 100%;
  border: 1px solid dodgerblue;
  cursor: pointer;
  padding: 10px;
`;
const Img = styled.img`
  width: 100%;
`;
const Text = styled.div``;

const Button = styled.button`
  width: 130px;
  height: 30px;
  background-color: dodgerblue;
  border: none;
  color: white;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: blue;
  }
  &:active {
    background-color: darkblue;
  }
`;

export function MovieList() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getMovies();
  }, []);

  // async function getMovies() {
  //   try {
  //     const response = await getMoviesNowPlaying();
  //     console.log(response.data);
  //     setData(response.data);
  //   } catch (error) {
  //     console.log("Error", error);
  //   }
  // }

  //test
  const [playing, setplaying] = useState("NowPlayingTab");
  async function getMovies() {
    try {
      const response = await getMoviesNowPlaying();
      console.log(response.data);
      setData(response.data);
      switch (playing) {
        case "home":
          return <getMoviesNowPlayingTab />;
          console.log();
        case "getMoviesUpcoming":
          return <getMoviesPopular />;
        case "getMoviesPopular":
          return <getMoviesTopRated />;
        case "getMoviesTopRated":
          return <getMoviesTopRated />;
        case "getMoviesUpcoming":
          return <getMoviesUpcoming />;
        default:
          return <getMoviesNowPlayingTab />;
      }
    } catch (error) {
      console.log("Error", error);
    }
  }

  return (
    <>
      <h1>Movie List</h1>
      <Button onClick={() => setplaying("getMoviesUpcoming")}>
        Now Playing
      </Button>
      <Button onClick={() => setplaying("getMoviesPopular")}>Popular</Button>
      <Button onClick={() => setplaying("getMoviesTopRated")}>Top Rated</Button>
      <Button onClick={() => setplaying("getMoviesUpcoming")}>Upcoming</Button>
      <Container>
        {data &&
          data.results.map((movie) => (
            <Card key={movie.id}>
              <Img src={IMG_PATH + movie.poster_path}></Img>
              <Text>타이틀 : {movie.title}</Text>
              <Text>장르 : {getGenre(movie.genre_ids)}</Text>
              <Text>소개글 : {movie.overview}</Text>
            </Card>
          ))}
      </Container>
    </>
  );
}
