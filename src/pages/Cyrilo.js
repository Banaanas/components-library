import Ganesh from "../assets/Ganesh.svg";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import StyledImg from "../Components/StyledComponents/StyledImg";
import StyledHeading from "../Components/StyledComponents/StyledHeading";

const CyriloPage = () => (
  <StyledPageMain>
    <StyledImg src={Ganesh} alt="Ganesh Icon" />
    <StyledHeading>Cyrilo</StyledHeading>
  </StyledPageMain>
);

export default CyriloPage;
