import { GET_MOVIES, GET_MOVIE, SEARCH_MOVIES, GET_PAGE } from "../Acctions";

const MoviesReducer = (state, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        Movies: action.payload.movies,
        Pages: action.payload.pages,
      };
    case SEARCH_MOVIES:
      return {
        ...state,
        Movies: action.payload.movie,
        Pages: action.payload.pages,
      };
    case GET_PAGE:
      return {
        ...state,
        Movies: action.payload.movies,
      };
    case GET_MOVIE:
      return {
        ...state,
        Movie: action.payload.movie,
      };
    default:
      return state;
  }
};

export default MoviesReducer;
