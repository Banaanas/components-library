import React from "react";
import styled from "@emotion/styled";
import Ganesh from "../assets/Ganesh.svg";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90%;
`;

const StyledImg = styled.img`
  width: 20rem;
  height: auto;
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
`;


const WorkPage = () => (
    <StyledMain>
        <StyledImg src={Ganesh} alt="Ganesh Icon" />
        <StyledTitle>Work</StyledTitle>
    </StyledMain>
);

export default WorkPage;
