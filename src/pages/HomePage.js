import {useSelector} from "react-redux";
import {pageTransition, pageVariants} from "../styles/animations";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import StyledImg from "../Components/StyledComponents/StyledImg";
import StyledHeading from "../Components/StyledComponents/StyledHeading";
import longText from "../data/data";
import Ganesh from "../assets/Ganesh.svg";

const HomePage = () => {
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
      <p>{longText}</p>
      <p>{longText}</p>
      <p>{longText}</p>
    </StyledPageMain>
  );
};

export default HomePage;
