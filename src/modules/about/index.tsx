import React, { useEffect, useRef } from 'react';
import config from '@lib/config';
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
} from './about.styles';
import { FlexContainer, Heading } from '@styles';
import { Layout } from '@components';
import { aboutDirectory } from '@lib/about';

const { instalink } = config;

const AboutPage = ({
  frontMatter,
  content,
}: {
  frontMatter: any;
  content: any;
}) => {
  const { title, avatar } = frontMatter;
  return (
    <Layout isHome={false} animateNav={false} footer={true}>
      <StyledContainer id='about'>
        <Heading>{title}</Heading>
        <FlexContainer>
          <StyledPic>
            <StyledAvatarLink
              href={instalink}
              target='_blank'
              rel='nofollow noopener noreferrer'
            >
              <StyledAvatar
                src={aboutDirectory + avatar}
                height='1000'
                width='800'
              ></StyledAvatar>
            </StyledAvatarLink>
          </StyledPic>
        </FlexContainer>
        <StyledResumeContainer>
          <div>
            <StyledResumeButton
              href='/resume.pdf'
              target='_blank'
              rel='nofollow noopener noreferrer'
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
