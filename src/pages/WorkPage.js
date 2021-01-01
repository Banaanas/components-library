import Ganesh from "../assets/Ganesh.svg";
import StyledImg from "../Components/StyledComponents/StyledImg";
import StyledHeading from "../Components/StyledComponents/StyledHeading";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import { pageTransition, pageVariants } from "../styles/animations";

const WorkPage = () => (
  <StyledPageMain
    variants={pageVariants}
    transition={pageTransition}
    initial="initial"
    animate="animate"
    exit="initial"
  >
    <StyledImg src={Ganesh} alt="Ganesh Icon" />
    <StyledHeading>Work</StyledHeading>
  </StyledPageMain>
);

export default WorkPage;
