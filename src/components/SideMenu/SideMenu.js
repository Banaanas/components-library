import React from "react";
import styled from "@emotion/styled";
import { NavLink, useLocation } from "react-router-dom";

const StyledMenu = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  padding: 0 2rem;
  text-align: left;
  background-color: ${({ theme }) => theme.colors.secondary.common};
  transform: ${({ isMenuOpen }) =>
    isMenuOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 100%;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  color: ${({ theme }) => theme.colors.primary.dark};
  font-weight: bold;
  font-size: 2rem;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  text-decoration: none;
  opacity: 0.5;
  transition: color 0.3s linear;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.5rem;
    text-align: center;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary.dark};
    opacity: 1;
  }

  /* React Router NavLink attributes automatically an "active" className
  to the active NavLink (when it matches the URL) */
  &.active {
    color: ${({ theme }) => theme.colors.primary.dark};
    opacity: 1;
  }
`;

const SideMenu = ({ isMenuOpen, setMenuOpen, menuID }) => {
  const isMenuHidden = isMenuOpen ? true : false;
  const tabIndex = isMenuHidden ? 0 : -1;

  // USELOCATION - REACT ROUTER
  // React Router NavLink attributes automatically an "active" className
  // to the active NavLink (when it matches the URL)
  // It is possible to make a NavLink active when a URL doesn't match, with the
  // isActive function and Regex filter (with the different routes).
  // Example : Click on Resume Link --> Route to Resume (/resume) + activeClassName
  // for About Tab (/about). This choice, because Resume is a part of the About submenu
  const { pathname } = useLocation();

  return (
    <StyledMenu isMenuOpen={isMenuOpen} id={menuID} aria-hidden={!isMenuHidden}>
      <StyledNav>
        <StyledNavLink
          exact
          to="/"
          tabIndex={tabIndex}
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <span aria-hidden="true">&#128060;</span>
          Home
        </StyledNavLink>

        <StyledNavLink
          to="/about"
          tabIndex={tabIndex}
          onClick={() => setMenuOpen(!isMenuOpen)}
          isActive={() =>
            ["/about", "/cyrilo", "/vision", "/resume"].includes(pathname)
          }
        >
          <span aria-hidden="true">&#128040;</span>
          About
        </StyledNavLink>
        <StyledNavLink
          to="/work"
          tabIndex={tabIndex}
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <span aria-hidden="true">&#128047;</span>
          Work
        </StyledNavLink>
        <StyledNavLink
          to="/contact"
          tabIndex={tabIndex}
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <span aria-hidden="true">&#128048;</span>
          Contact
        </StyledNavLink>
      </StyledNav>
    </StyledMenu>
  );
};
export default SideMenu;
