import React, { useEffect, useRef } from "react";
import config from "@lib/config";
import {
  Skill,
  SkillsContainer,
  StyledAvatar,
  StyledAvatarLink,
  StyledContainer,
  StyledContent,
  StyledPic,
  StyledResumeButton,
  StyledResumeContainer,
} from "./about.styles";
import { FlexContainer, Heading } from "@styles";
import { Layout } from "@components";

const { instalink } = config;

const AboutPage = ({ data }: { data: any }) => {
  return (
    <Layout isHome={false} animateNav={false} footer={true}>
      <StyledContainer id="about">
        <Heading>About</Heading>
        <FlexContainer>
          <StyledPic>
            <StyledAvatarLink
              href={instalink}
              target="_blank"
              rel="nofollow noopener noreferrer"
            ></StyledAvatarLink>
          </StyledPic>
        </FlexContainer>
        <StyledResumeContainer>
          <div>
            <StyledResumeButton
              href="/resume.pdf"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Resume
            </StyledResumeButton>
          </div>
        </StyledResumeContainer>
      </StyledContainer>
    </Layout>
  );
};

export default AboutPage;
