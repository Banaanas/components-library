import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding: 1rem;

  @media (min-width: 845px) {
    display: flex;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary.dark};
  font-weight: bolder;
  font-size: 1rem;
  text-decoration: none;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }

  /* React Router NavLink attributes automatically an "active" className
  to the active NavLink (when it matches the URL) */
  &.active {
    color: ${({ theme }) => theme.colors.primary.dark};
    opacity: 1;
  }
`;

const NavBar = () => (
  <StyledNav>
    <StyledNavLink exact to="/">
      HOME
    </StyledNavLink>
    <StyledNavLink to="/about">ABOUT</StyledNavLink>
    <StyledNavLink to="/work">WORK</StyledNavLink>
    <StyledNavLink to="/contact">CONTACT</StyledNavLink>
  </StyledNav>
);

export default NavBar;
