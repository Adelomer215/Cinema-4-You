export const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=3ab04b56ab7367d183c2af2f3a15adad&language=en-US";

export const fetchMovies = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const searchMovies = async (movieName) => {
  const SearchURL = `
  https://api.themoviedb.org/3/search/movie?api_key=3ab04b56ab7367d183c2af2f3a15adad&language=en-US&page=1&query=${movieName}&language=en-US&page=1&include_adult=false
  `;
  const response = await fetch(SearchURL);
  const data = await response.json();
  return data;
};

export const getPage = async (page) => {
  const SearchURL = `
  https://api.themoviedb.org/3/movie/popular?api_key=3ab04b56ab7367d183c2af2f3a15adad&language=en-US&page=${page}
  `;

  const response = await fetch(SearchURL);
  const data = await response.json();
  return data;
};

export const getMovie = async (id) => {
  const url = `
  https://api.themoviedb.org/3/movie/${id}?api_key=3ab04b56ab7367d183c2af2f3a15adad&language=en-US
  `;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
