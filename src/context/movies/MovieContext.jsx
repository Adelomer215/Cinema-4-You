import React, { createContext, useReducer } from "react";
import MoviesReducer from "./MoviesReducer";

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const initState = {
    Movies: [],
    Pages: 0,
    Movie: {},
  };
  const [state, dispatch] = useReducer(MoviesReducer, initState);

  const { Movies, Movie, Pages } = state;
  return (
    <MovieContext.Provider value={{ Movies, Movie, Pages, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
