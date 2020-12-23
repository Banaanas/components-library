import Ganesh from "../assets/Ganesh.svg";
import StyledPageMain from "../components/StyledComponents/StyledPageMain";
import StyledImg from "../components/StyledComponents/StyledImg";
import StyledHeading from "../components/StyledComponents/StyledHeading";

const CyriloPage = () => (
  <StyledPageMain>
    <StyledImg src={Ganesh} alt="Ganesh Icon" />
    <StyledHeading>Cyrilo</StyledHeading>
  </StyledPageMain>
);

export default CyriloPage;
