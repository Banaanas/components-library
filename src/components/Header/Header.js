import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import FocusLock from "react-focus-lock";
import { NavLink } from "react-router-dom";

import Shiva from "../../assets/Shiva.svg";

import Burger from "./Burger";
import SideMenu from "../SideMenu/SideMenu";
import useClickOutside from "../../custom-hooks/useclickOutside";
import NavBar from "./NavBar";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10%;
  background-color: ${({ theme }) => theme.colors.secondary.common};

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
  @media (min-width: 845px) {
    display: none !important;
    background-color: hotpink !important;
  }
`;

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const DOMRef = useRef(null);
  const menuId = "main-menu";

  // Close Side SideMenu when click outside - custom Hook
  useClickOutside(DOMRef, () => setOpenMenu(false));

  return (
    <StyledHeader>
      <NavLink to="/" activeClassName="selected">
        <button type="button">
          <StyledLogo src={Shiva} alt="Shiva" />
        </button>
      </NavLink>
      <NavBar />
      <StyledRefDiv ref={DOMRef}>
        <FocusLock disabled={!openMenu}>
          <Burger
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            menuID={menuId}
          />
          <SideMenu
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            menuID={menuId}
          />
        </FocusLock>
      </StyledRefDiv>
    </StyledHeader>
  );
};

export default Header;
