import React from "react";
import styled from "@emotion/styled";

import ContactIcons from "./ContactIcons";
import NavBar from "./NavBar";
import Ganesh from "../../assets/Ganesh.svg";
import Aum from "../../assets/Aum.svg";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.colors.secondary.common};
`;

const StyledGaneshIcon = styled.img`
  width: 3rem;
`;

const StyledAumIcon = styled.img`
  width: 1rem;
  color: ${({ theme }) => theme.colors.primary.dark};
`;

const Footer = () => {
  return (
    <StyledFooter>
      <ContactIcons />
      <NavBar/>
      <span> CyriloOo | 2020 | All Rights Reserved</span>
      <span>
        Crafted with <StyledAumIcon src={Aum} alt="Aum" />
        France
      </span>
    </StyledFooter>
  );
};

export default Footer;
