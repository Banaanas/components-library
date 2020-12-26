import Ganesh from "../assets/Ganesh.svg";
import StyledImg from "../Components/StyledComponents/StyledImg";
import StyledHeading from "../Components/StyledComponents/StyledHeading";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";

const WorkPage = () => (
  <StyledPageMain>
    <StyledImg src={Ganesh} alt="Ganesh Icon" />
    <StyledHeading>Work</StyledHeading>
  </StyledPageMain>
);

export default WorkPage;
