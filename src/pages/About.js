import Ganesh from "../assets/Ganesh.svg";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import StyledImg from "../Components/StyledComponents/StyledImg";
import StyledHeading from "../Components/StyledComponents/StyledHeading";

const AboutPage = () => (
  <StyledPageMain>
    <StyledImg src={Ganesh} alt="Ganesh Icon" />
    <StyledHeading>About</StyledHeading>
  </StyledPageMain>
);

export default AboutPage;
