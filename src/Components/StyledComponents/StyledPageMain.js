import styled from "@emotion/styled";
import {motion} from "framer-motion";

const StyledPageMain = styled(motion.main)`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 4rem; /* To match the Fixed Header Height */
  padding: 2rem;
  font-weight: bold;
  font-size: 1rem;
  text-align: justify;
  filter: ${({ isMenuOpen }) => (isMenuOpen ? "blur(20px)" : "blur(0)")};
  transition: filter, 300ms ease;
`;

export default StyledPageMain;
