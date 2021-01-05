import { useRef, useState } from "react";
import styled from "@emotion/styled";
import { NavLink, useLocation } from "react-router-dom";
import { usePopper } from "react-popper";

const StyledNav = styled.nav`
  display: none;

  @media (min-width: 710px) {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    min-width: 450px;
    margin-left: auto;
  }

  @media (min-width: 850px) {
    min-width: 550px;
  }
`;

const StyledList = styled.ul`
  display: inline-flex;
  justify-content: space-around;
  width: 100%;
  list-style: none;

  li {
    display: flex;
    align-content: center;
    justify-content: center;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary.dark};
  font-weight: bolder;
  font-size: 1.2rem;
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

  @media (min-width: 850px) {
    font-size: 1.4rem;
  }
`;

const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.secondary.main};
  border-radius: 5px;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: background-color, opacity 250ms linear;
`;

const DropdownMenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.primary.dark};
  font-weight: bolder;
  font-size: 1.2rem;
  text-transform: capitalize;
  text-decoration: none;
  cursor: pointer;
  opacity: 0.5;

  &.active {
    opacity: 1;
  }

  &:hover {
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

  // USESTATE - STATE
  const [isVisible, setDropDownMenuVisible] = useState(false);
  const referenceRef = useRef(null);
  const popperRef = useRef(null);

  // Popper Configuration
  const { styles, attributes } = usePopper(
    referenceRef.current,
    popperRef.current,
    {
      placement: "bottom-start",
      modifiers: [
        {
          name: "offset",
          enabled: true,
          options: {
            offset: [0, 0],
          },
        },
      ],
    },
  );

  // OPEN DROPDOWN MENU - FUNCTION
  const handleOpenMenu = () => {
    setDropDownMenuVisible(true);
  };

  // CLOSE DROPDOWN MENU - FUNCTION
  const handleCloseMenu = () => {
    setDropDownMenuVisible(false);
  };

  // DROPDOWN MENU ITEMS - ABOUT TAB
  const menuItems = [
    {
      name: "Cyrilo",
      route: "/cyrilo",
    },
    {
      name: "Vision",
      route: "/vision",
    },
    {
      name: "Resume",
      route: "/resume",
    },
  ];

  return (
    <>
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
              ref={referenceRef}
              onClick={handleCloseMenu}
              onMouseEnter={handleOpenMenu}
              onMouseLeave={handleCloseMenu}
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
      <DropdownMenu
        onMouseEnter={handleOpenMenu}
        onMouseLeave={handleCloseMenu}
        ref={popperRef}
        style={styles.popper}
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...attributes.popper}
        visible={isVisible}
      >
        {menuItems.map((item) => (
          <DropdownMenuItem
            to={item.route}
            onClick={handleCloseMenu}
            key={`${item.name}${item.route}`}
          >
            {item.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenu>
    </>
  );
};

export default NavBar;
