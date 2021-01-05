import styled from "@emotion/styled";
import { NavLink, useLocation } from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  max-width: 350px;
`;

const StyledList = styled.ul`
  display: inline-flex;
  justify-content: space-around;
  width: 100%;
  padding: 0;
  list-style: none;
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.primary.dark};
  font-weight: bolder;
  font-size: 1rem;
  text-decoration: none;
  opacity: 0.6;

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

const NavBar = () => {
  // USELOCATION - REACT ROUTER
  // React Router NavLink attributes automatically an "active" className
  // to the active NavLink (when it matches the URL)
  // It is possible to make a NavLink active when a URL doesn't match, with the
  // isActive function and Regex filter (with the different routes).
  // Example : Click on Resume Link --> Route to Resume (/resume) + activeClassName
  // for About Tab (/about). This choice, because Resume is a part of the About submenu
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <StyledList>
        <li>
          <StyledNavLink exact to="/">
            HOME
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            to="/about"
            isActive={() =>
              ["/about", "/cyrilo", "/vision", "/resume"].includes(pathname)
            }
          >
            ABOUT
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/work">WORK</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/contact">CONTACT</StyledNavLink>
        </li>
      </StyledList>
    </StyledNav>
  );
};

export default NavBar;
