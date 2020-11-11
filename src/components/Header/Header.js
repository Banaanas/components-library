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
`;

const StyledButton = styled.button`
  width: 4.5rem;
  height: 4.5rem;
  margin: 0 !important;
  padding: 0 !important;
  background: url(${Shiva}) no-repeat; /* Logo */
  background-size: contain;
  border: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 710px) {
    height: 6.5rem;
  }

  &:focus {
    color: ${({ theme }) => theme.colors.primary.dark};
    outline: thin dotted;
  }
`;

const Header = () => (
  <StyledHeader>
    <NavLink to="/">
      <StyledButton type="button" />
    </NavLink>
    <NavBar />
    <SideMenu />
  </StyledHeader>
);

export default Header;
