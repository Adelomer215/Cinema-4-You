import React, { useContext } from "react";
import ReactPaginate from "react-paginate";
import { GET_PAGE } from "../context/Acctions";
import { getPage } from "../context/movies/MovieActions";
import { MovieContext } from "../context/movies/MovieContext";

const Pagination = () => {
  const { Pages, dispatch } = useContext(MovieContext);
  const handlePageClick = (page) => {
    getPage(page.selected + 1).then((response) => {
      const movies = response.results;
      dispatch({ type: GET_PAGE, payload: { movies } });
    });
  };
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={Pages}
      initialPage={0}
      previousLabel="< previous"
      containerClassName="pagination justify-content-center"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      activeClassName="active"
    />
  );
};

export default Pagination;
