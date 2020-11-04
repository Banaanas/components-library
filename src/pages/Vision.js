import React from "react";
import Ganesh from "../assets/Ganesh.svg";
import StyledImg from "../components/StyledComponents/StyledImg";
import StyledHeading from "../components/StyledComponents/StyledHeading";
import StyledPageMain from "../components/StyledComponents/StyledPageMain";

const VisionPage = () => (
  <StyledPageMain>
    <StyledImg src={Ganesh} alt="Ganesh Icon" />
    <StyledHeading>Vision</StyledHeading>
  </StyledPageMain>
);

export default VisionPage;
