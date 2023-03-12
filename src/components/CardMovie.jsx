import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const CardMovie = ({ title, img, date, vote, id }) => {
  return (
    <Link to={`/movie/${id}`}>
      <Movie className="card" id={id}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${img}`}
          alt={`${title}-img`}
        />
        <div className="bg"></div>
        <MovieOverlay>
          <h2>{title}</h2>
          <h3>Release date:{date}</h3>
          <h3>
            Rate:
            {vote}
          </h3>
        </MovieOverlay>
      </Movie>
    </Link>
  );
};
const MovieOverlay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  left: -29rem;
  transition: display 0.2s ease-in-out;
  z-index: -1;
`;
const Movie = styled.div`
  color: #ff0000;
  cursor: pointer;
  max-height: 25rem;
  overflow: hidden;
  img {
    max-width: 100%;
    max-height: 100%;
  }
  .bg {
    transition: all 0.02s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  :hover {
    ${MovieOverlay} {
      left: 0;
      z-index: 11111;
    }
    .bg {
      background-color: rgba(41, 40, 40, 0.2);
    }
  }
`;

export default CardMovie;
