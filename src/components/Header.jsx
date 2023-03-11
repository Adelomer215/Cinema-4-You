import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <HeaderElement className="navbar navbar-expand-md ">
      <div className="container">
        <h1 className="navbar-brand flex-grow-1">
          <span>c</span>
          ima4
          <span>u</span>
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavBar />
      </div>
    </HeaderElement>
  );
};

const HeaderElement = styled.header`
  background: linear-gradient(-90deg, #4b3361, #3e4a92);
  h1 {
    color: #fff;
    font-size: 3rem;
    span {
      text-transform: uppercase;
      font-size: 4rem;
    }
  }
`;

export default Header;
