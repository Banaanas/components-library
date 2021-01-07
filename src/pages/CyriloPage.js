import Ganesh from "../assets/Ganesh.svg";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import StyledImg from "../Components/StyledComponents/StyledImg";
import StyledHeading from "../Components/StyledComponents/StyledHeading";
import {pageTransition, pageVariants} from "../styles/animations";
import {useSelector} from "react-redux";

const CyriloPage = () => {
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
      <StyledHeading>Cyrilo</StyledHeading>
    </StyledPageMain>
  );
};

export default CyriloPage;
