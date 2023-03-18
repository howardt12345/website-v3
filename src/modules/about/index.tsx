import React from 'react';
import config from '@lib/config';
import {
  StyledAvatar,
  StyledAvatarLink,
  StyledContent,
  StyledPic,
  StyledResumeButton,
  StyledResumeContainer,
  AboutDescription,
} from './about.styles';
import { FlexContainer, Heading, Section, Subheading } from '@styles';
import { Layout } from '@components';
import { aboutDirectory } from '@lib/about';
import { SkillsComponent } from './skills';

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
      <Section id='about'>
        <Heading>{title}</Heading>
        {/* Main about section */}
        <FlexContainer>
          {/* About content, left column */}
          <StyledContent>
            {/* About description */}
            <AboutDescription dangerouslySetInnerHTML={{ __html: content }} />
            {/* Resume button */}
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
            <SkillsComponent frontMatter={frontMatter} />
          </StyledContent>
          {/* Photo, right column */}
          <StyledPic>
            <StyledAvatarLink
              href={instalink}
              target='_blank'
              rel='nofollow noopener noreferrer'
            >
              <StyledAvatar
                src={aboutDirectory + avatar}
                alt='Photo of me'
                layout='fill'
                objectFit='contain'
              ></StyledAvatar>
            </StyledAvatarLink>
          </StyledPic>
        </FlexContainer>
        <Subheading>Timeline</Subheading>
        <div>Coming soon...</div>
      </Section>
    </Layout>
  );
};

export default AboutPage;
