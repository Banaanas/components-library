import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

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
  transform: ${({ openMenu }) =>
    openMenu ? "translateX(0)" : "translateX(-100%)"};
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
  transition: color 0.3s linear;
  opacity: 0.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.5rem;
    text-align: center;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary.dark};
    opacity: 1;
  }

  &.selected {
    color: ${({ theme }) => theme.colors.primary.dark};
    opacity: 1;
  }
`;

const SideMenu = ({ setOpenMenu, openMenu, menuID }) => {
  const isHidden = openMenu ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu openMenu={openMenu} id={menuID} aria-hidden={!isHidden}>
      <StyledNav>
        <StyledNavLink
          exact
          to="/"
          activeClassName="selected"
          tabIndex={tabIndex}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span aria-hidden="true">&#128060;</span>
          Home
        </StyledNavLink>

        <StyledNavLink
          to="/about"
          activeClassName="selected"
          tabIndex={tabIndex}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span aria-hidden="true">&#128040;</span>
          About
        </StyledNavLink>
        <StyledNavLink
          to="/work"
          activeClassName="selected"
          tabIndex={tabIndex}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span aria-hidden="true">&#128047;</span>
          Work
        </StyledNavLink>
        <StyledNavLink
          to="/contact"
          activeClassName="selected"
          tabIndex={tabIndex}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span aria-hidden="true">&#128048;</span>
          Contact
        </StyledNavLink>
      </StyledNav>
    </StyledMenu>
  );
};
export default SideMenu;
