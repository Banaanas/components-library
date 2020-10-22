import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import FocusLock from "react-focus-lock";

import Burger from "../SideMenu/Burger";
import SideMenu from "../SideMenu/SideMenu";
import useOnClickOutside from "../../custom-hooks/useOnClickOutside";
import NavBar from "./NavBar";

import Shiva from "../../assets/Shiva.svg";

const StyledHeader = styled.header`
  position: fixed;
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
  }
`;

const StyledLogo = styled.img`
  width: 4rem;
  background-color: transparent;

  &:hover {
    opacity: 0.8;
  }
`;

const StyledRefDiv = styled.div`
  display: flex;
  @media (min-width: 710px) {
    display: none;
  }
`;

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const DOMRef = useRef(null);
  const menuId = "main-menu";

  // Close Side SideMenu when click outside the Ref- custom Hook
  useOnClickOutside(DOMRef, () => setMenuOpen(false));

  return (
    <StyledHeader>
      <NavLink to="/">
        <button type="button">
          <StyledLogo src={Shiva} alt="Shiva Logo" />
        </button>
      </NavLink>
      <NavBar />
      <StyledRefDiv ref={DOMRef}>
        <FocusLock disabled={!isMenuOpen}>
          <Burger
            openMenu={isMenuOpen}
            setOpenMenu={setMenuOpen}
            menuID={menuId}
          />
          <SideMenu
            isMenuOpen={isMenuOpen}
            setMenuOpen={setMenuOpen}
            menuID={menuId}
          />
        </FocusLock>
      </StyledRefDiv>
    </StyledHeader>
  );
};

export default Header;
