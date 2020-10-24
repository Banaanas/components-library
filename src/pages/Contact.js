import React from "react";
import styled from "@emotion/styled";
import Ganesh from "../assets/Ganesh.svg";

const StyledMain = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 8rem; /* To match the Fixed Header Height */
  padding: 4rem;
  font-size: 2rem;
`;

const StyledImg = styled.img`
  width: 20rem;
  height: auto;
  background-color: transparent;
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
`;

const ContactPage = () => (
  <StyledMain>
    <StyledImg src={Ganesh} alt="Ganesh Icon" />
    <StyledTitle>Contact</StyledTitle>
  </StyledMain>
);

export default ContactPage;
