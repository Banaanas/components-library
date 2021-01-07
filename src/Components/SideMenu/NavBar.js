import {useDispatch, useSelector} from "react-redux";
import styled from "@emotion/styled";
import {NavLink, useLocation} from "react-router-dom";
import {useSwipeable} from "react-swipeable";
import enablePageScroll from "../../utils/enablePageScroll";
import {closeSideMenu} from "../../store/slices/sideMenuSlice";

const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75%;
  max-width: calc(710px - 25%);
  min-height: 100%;
  overflow: hidden;
  text-align: left;
  background-color: ${({ theme }) => theme.colors.secondary.main};
  box-shadow: -3px 0 10px 0 #555;
  transform: ${({ isMenuOpen }) =>
    isMenuOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform, 300ms ease;
`;

const StyledList = styled.ul`
  list-style: none;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 0;
  color: ${({ theme }) => theme.colors.primary.dark};
  font-weight: bold;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  text-decoration: none;
  opacity: 0.6;

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

  /* Icons */
  span {
    margin-right: 1rem;
  }
`;

const NavBar = ({ menuID }) => {
  // SIDE MENU - REDUX STATE
  const isMenuOpen = useSelector((state) => state.sideMenu.isMenuOpen);

  // USEDISPATCH - REDUX STATE
  const dispatch = useDispatch();

  const isMenuDisplayed = isMenuOpen ? true : false;
  const tabIndex = isMenuDisplayed ? 0 : -1;

  // USELOCATION - REACT ROUTER
  // React Router NavLink attributes automatically an "active" className
  // to the active NavLink (when it matches the URL)
  // It is possible to make a NavLink active when a URL doesn't match, with the
  // isActive function and Regex filter (with the different routes).
  // Example : Click on Resume Link --> Route to Resume (/resume) + activeClassName
  // for About Tab (/about). This choice, because Resume is a part of the About submenu
  const { pathname } = useLocation();

  // Handle Close Side Menu - FUNCTION
  const handleCloseMenu = () => {
    // Close SideMenu - Dispatch - Redux State
    dispatch(closeSideMenu());

    // Enable Scroll Again
    enablePageScroll();
  };

  // React Swipe Event Handler - Close SideMenu when onSwipedLeft
  const handlers = useSwipeable({
    trackMouse: true,
    onSwipedLeft: () => {
      handleCloseMenu();
    },
  });

  return (
    <StyledMenu
      isMenuOpen={isMenuOpen}
      id={menuID}
      aria-hidden={!isMenuDisplayed}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...handlers}
    >
      <nav>
        <StyledList>
          <li>
            <StyledNavLink
              exact
              to="/"
              tabIndex={tabIndex}
              onClick={handleCloseMenu}
            >
              <span aria-hidden="true">🐼</span>
              Home
            </StyledNavLink>
          </li>

          <li>
            <StyledNavLink
              to="/about"
              tabIndex={tabIndex}
              onClick={handleCloseMenu}
              isActive={() =>
                ["/about", "/cyrilo", "/vision", "/resume"].includes(pathname)
              }
            >
              <span aria-hidden="true">🐨</span>
              About
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink
              to="/work"
              tabIndex={tabIndex}
              onClick={handleCloseMenu}
            >
              <span aria-hidden="true">🐯</span>
              Work
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink
              to="/contact"
              tabIndex={tabIndex}
              onClick={handleCloseMenu}
            >
              <span aria-hidden="true">🐰</span>
              Contact
            </StyledNavLink>
          </li>
        </StyledList>
      </nav>
    </StyledMenu>
  );
};

export default NavBar;
