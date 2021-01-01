import Ganesh from "../assets/Ganesh.svg";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import StyledImg from "../Components/StyledComponents/StyledImg";
import StyledHeading from "../Components/StyledComponents/StyledHeading";
import { pageTransition, pageVariants } from "../styles/animations";

const ResumePage = () => (
  <StyledPageMain
    variants={pageVariants}
    transition={pageTransition}
    initial="initial"
    animate="animate"
    exit="initial"
  >
    <StyledImg src={Ganesh} alt="Ganesh Icon" />
    <StyledHeading>Resume</StyledHeading>
  </StyledPageMain>
);

export default ResumePage;
