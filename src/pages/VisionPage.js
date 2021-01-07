import {useSelector} from "react-redux";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import StyledImg from "../Components/StyledComponents/StyledImg";
import StyledHeading from "../Components/StyledComponents/StyledHeading";
import {pageTransition, pageVariants} from "../styles/animations";
import Ganesh from "../assets/Ganesh.svg";

const VisionPage = () => {
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
      <StyledHeading>Vision</StyledHeading>
    </StyledPageMain>
  );
};

export default VisionPage;
