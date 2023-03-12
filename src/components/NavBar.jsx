import React, { useState, useContext } from "react";
import styled from "styled-components";
import { fetchMovies, searchMovies } from "../context/movies/MovieActions";
import { MovieContext } from "../context/movies/MovieContext";
import { GET_MOVIES, SEARCH_MOVIES } from "../context/Acctions";
const NavBar = () => {
  const [Search, setSearch] = useState("");
  const { dispatch } = useContext(MovieContext);

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(Search).then((response) => {
      const movie = response.results;
      const pages = response.total_pages;

      if (movie.length > 0) {
        dispatch({ type: SEARCH_MOVIES, payload: { movie, pages } });
      } else {
        fetchMovies().then((data) => {
          const movies = data.results;
          const pages = data.total_pages;
          dispatch({ type: GET_MOVIES, payload: { movies, pages } });
        });
      }
    });
    setSearch("");
  };
  return (
    <Nav>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="d-flex" role="search" onSubmit={handleSearch}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search"
          />
          <button className="btn" type="submit">
            Search
          </button>
        </form>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  button.btn {
    border: 1px solid #0fff;
    color: #fff;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #0fff;
      color: black;
    }
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export default NavBar;
