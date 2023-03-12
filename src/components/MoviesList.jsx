import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { GET_MOVIES } from "../context/Acctions";
import { fetchMovies } from "../context/movies/MovieActions";
import { MovieContext } from "../context/movies/MovieContext";
import CardMovie from "./CardMovie";
const MoviesList = () => {
  const { Movies, dispatch } = useContext(MovieContext);

  useEffect(() => {
    fetchMovies().then((data) => {
      const pages = data.total_pages;
      const movies = data.results;
      dispatch({ type: GET_MOVIES, payload: { movies, pages } });
    });
  }, []);

  return (
    <div>
      <Container className="container my-4">
        {Movies.map((movie) => {
          return (
            <CardMovie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              img={movie.poster_path}
              date={movie.release_date}
              vote={movie.vote_average}
            />
          );
        })}
      </Container>
    </div>
  );
};

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1rem 2rem;
`;

export default MoviesList;
