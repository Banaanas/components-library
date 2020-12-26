import Ganesh from "../assets/Ganesh.svg";
import StyledImg from "../Components/StyledComponents/StyledImg";
import StyledHeading from "../Components/StyledComponents/StyledHeading";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";

const VisionPage = () => (
  <StyledPageMain>
    <StyledImg src={Ganesh} alt="Ganesh Icon" />
    <StyledHeading>Vision</StyledHeading>
  </StyledPageMain>
);

export default VisionPage;
