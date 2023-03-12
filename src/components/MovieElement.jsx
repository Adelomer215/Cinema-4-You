import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { GET_MOVIE } from "../context/Acctions";
import { getMovie } from "../context/movies/MovieActions";
import { MovieContext } from "../context/movies/MovieContext";

const MovieElement = () => {
  const param = useParams();
  const { dispatch, Movie } = useContext(MovieContext);

  useEffect(() => {
    getMovie(param.id).then((movie) => {
      dispatch({ type: GET_MOVIE, payload: { movie } });
    });
  });

  return (
    <div className="container">
      <MovieDetails>
        <img
          src={`https://image.tmdb.org/t/p/w500/${Movie.poster_path}`}
          alt="vit"
        />
        <MovieContent>
          <h2>
            Movie Name: <span>{Movie.original_title}</span>
          </h2>
          <h3>
            Release date: <span>{Movie.release_date}</span>
          </h3>
          <h3>
            Number of vote: <span>{Movie.vote_count}</span>
          </h3>
          <h3>
            Rate: <span>{Movie.vote_average}</span>
          </h3>
        </MovieContent>
      </MovieDetails>
      <MovieStory>
        <p>{Movie.overview}</p>
      </MovieStory>
      <div className="btns d-flex justify-content-center">
        <Button to={"/"}>Home</Button>
      </div>
    </div>
  );
};

const MovieDetails = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 2rem;
  img {
    width: 50%;
  }
`;
const MovieContent = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  span {
    color: red;
  }
`;
const MovieStory = styled.div`
  margin-top: 3rem;
  padding: 2rem;
`;
const Button = styled(Link)`
  background-color: #3e4a92;
  color: #fff;
  display: inline-block;
  width: fit-content;
  padding: 0.2em 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;
export default MovieElement;
