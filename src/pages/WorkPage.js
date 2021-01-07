import {useSelector} from "react-redux";
import StyledImg from "../Components/StyledComponents/StyledImg";
import StyledHeading from "../Components/StyledComponents/StyledHeading";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import {pageTransition, pageVariants} from "../styles/animations";
import Ganesh from "../assets/Ganesh.svg";

const WorkPage = () => {
  // SIDE MENU - REDUX STATE
  const isMenuOpen = useSelector((state) => state.sideMenu.isMenuOpen);

  return (
    <StyledPageMain
      variants={pageVariants}
      transition={pageTransition}
      initial="initial"
      animate="animate"
      exit="initial"
      isMenuOpen={isMenuOpen}
    >
      <StyledImg src={Ganesh} alt="Ganesh Icon" />
      <StyledHeading>Work</StyledHeading>
    </StyledPageMain>
  );
};

export default WorkPage;
