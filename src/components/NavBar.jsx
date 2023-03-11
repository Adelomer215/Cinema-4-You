import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Nav>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
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
