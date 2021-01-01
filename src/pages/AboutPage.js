import { pageTransition, pageVariants } from "../styles/animations";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import StyledImg from "../Components/StyledComponents/StyledImg";
import StyledHeading from "../Components/StyledComponents/StyledHeading";
import Ganesh from "../assets/Ganesh.svg";

const AboutPage = () => (
  <StyledPageMain
    variants={pageVariants}
    transition={pageTransition}
    initial="initial"
    animate="animate"
    exit="initial"
  >
    <StyledImg src={Ganesh} alt="Ganesh Icon" />
    <StyledHeading>About</StyledHeading>
  </StyledPageMain>
);

export default AboutPage;
