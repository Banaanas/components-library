import React from "react";
import { VscGithubInverted as GithubIcon } from "react-icons/vsc";
import { IoMdMail as MailIcon } from "react-icons/io";
import { ImLinkedin as LinkedInIcon } from "react-icons/im";
import styled from "@emotion/styled";

const StyledSocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  a {
    margin: 0 1rem;
  }

  svg {
    color: ${({ theme }) => theme.colors.primary.dark};
    font-size: 3rem;
    background-color: ${({ theme }) => theme.colors.secondary.common};
  }
`;

const ContactIcons = () => (
  <StyledSocialIconsContainer>
    <a
      aria-label="Github Profile Link"
      href="https://github.com/Banaanas"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubIcon />
    </a>
    <a aria-label="Cyrilo Dev Mail" href="mailto:cyrilodev@gmail.com">
      <MailIcon />
    </a>
    <a
      aria-label="LinkedIn Link"
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedInIcon />
    </a>
  </StyledSocialIconsContainer>
);

export default ContactIcons;
