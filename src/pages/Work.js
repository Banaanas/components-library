import React from "react";
import Ganesh from "../assets/Ganesh.svg";
import StyledImg from "../components/StyledComponents/StyledImg";
import StyledHeading from "../components/StyledComponents/StyledHeading";
import StyledPageMain from "../components/StyledComponents/StyledPageMain";

const WorkPage = () => (
  <StyledPageMain>
    <StyledImg src={Ganesh} alt="Ganesh Icon" />
    <StyledHeading>Work</StyledHeading>
  </StyledPageMain>
);

export default WorkPage;
