import styled from 'styled-components';
import Image from 'next/image';
import { theme, mixins, media, Section } from '@styles';

const { fontSizes, fonts } = theme;

export const StyledContainer = styled(Section)`
  padding-bottom: 50px;
  position: relative;
  width: 80vw;
  flex-direction: column;
`;

export const StyledContent = styled.div`
  width: 65%;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;
export const StyledPic = styled.div`
  position: relative;
  width: 35%;
  max-width: 300px;
  margin-left: 60px;
  ${media.tablet`margin: 60px auto 0; width: 70%;`};
  a {
    &:focus {
      outline: 0;
    }
  }
`;
export const StyledAvatar = styled(Image)``;
export const StyledAvatarLink = styled.a`
  span {
    display: block !important;
  }
  img {
    position: relative;
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1) !important;
    border-radius: ${theme.borderRadius};
    transition: ${theme.transition};
  }
  ${mixins.boxShadow};
  width: 100%;
  position: relative;
  border-radius: ${theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.accent};
  margin-left: -20px;
  &:hover,
  &:focus {
    background: transparent;
    &:after {
      top: 15px;
      left: 15px;
    }
    ${StyledAvatar} {
      filter: none !important;
      mix-blend-mode: normal;
    }
  }
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius};
    transition: ${theme.transition};
  }
  &:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.background};
    mix-blend-mode: screen;
  }
  &:after {
    border: 2px solid ${({ theme }) => theme.colors.accent};
    top: 20px;
    left: 20px;
    z-index: -1;
  }
`;
export const StyledResumeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
`;
export const StyledResumeButton = styled.a`
  ${mixins.smallButton};
  margin: 1rem;
`;
export const AboutDescription = styled.div`
  font-family: ${fonts.Raleway};
  font-size: ${fontSizes.md};
  br {
    display: block;
    margin: 0.5rem 0;
    content: '';
  }
`;
