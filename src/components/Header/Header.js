import React from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

import NavBar from "./NavBar";
import Shiva from "../../assets/Shiva.svg";
import SideMenu from "../SideMenu/SideMenu";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.secondary.main};

  button {
    width: auto;
    padding: 1rem;
    background-color: transparent;
    border: 0;
    cursor: pointer;

    &:focus {
      color: ${({ theme }) => theme.colors.primary.dark};
      outline: thin dotted;
    }
  }
`;

const StyledLogo = styled.img`
  height: 6.5rem;
  background-color: transparent;

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 710px) {
    height: 6.5rem;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <NavLink to="/">
        <button type="button">
          <StyledLogo src={Shiva} alt="Shiva Logo" />
        </button>
      </NavLink>
      <NavBar />
      <SideMenu />
    </StyledHeader>
  );
};

export default Header;
