import React, { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [Movies, setMovies] = useState(110);
  useEffect(() => {
    fetchMovies().then((response) => {
      setMovies((prev) => (prev = response));
    });
  }, []);

  const fetchMovies = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=3ab04b56ab7367d183c2af2f3a15adad&language=en-US&page=1";
    const response = await fetch(url);
    return response.json();
  };

  return (
    <MovieContext.Provider value={{ Movies }}>{children}</MovieContext.Provider>
  );
};

export default MovieContextProvider;
