import React from "react";
import styled from "@emotion/styled";

const StyledSideMenuButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 4rem;
  height: 6rem;
  padding: 0;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }


  span {
    position: relative;
    width: ${({ openMenu }) => (openMenu ? "4rem" : "4rem")};
    height: 0.75rem;
    background-color: ${({ theme, openMenu }) =>
      openMenu ? theme.colors.primary.dark : theme.colors.primary.dark};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
  }

  span:first-of-type {
    transform: ${({ openMenu }) => (openMenu ? "rotate(45deg)" : "rotate(0)")};
  }

  span:nth-of-type(2n) {
    transform: ${({ openMenu }) => (openMenu ? "rotate(-45deg)" : "rotate(0)")};
    opacity: ${({ openMenu }) => (openMenu ? "0" : "1")};
  }

  span:nth-of-type(3n) {
    transform: ${({ openMenu }) => (openMenu ? "rotate(-45deg)" : "rotate(0)")};
  }

  @media (min-width: 420px) {
    display: flex;
  }
`;

const Burger = ({ openMenu, setOpenMenu, menuID }) => {
  const isExpanded = openMenu ? true : false;

  return (
    <StyledSideMenuButton
      openMenu={openMenu}
      onClick={() => setOpenMenu(!openMenu)}
      aria-label="Toggle SideMenu"
      aria-expanded={isExpanded}
      aria-controls={menuID}
    >
      <span />
      <span />
      <span />
    </StyledSideMenuButton>
  );
};

export default Burger;
