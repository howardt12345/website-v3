import styled from 'styled-components';
import { theme, mixins, media, Main } from '@styles';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const { fontSizes, fonts, navDelay } = theme;

export const StyledContainer = styled(Main)`
  ${mixins.flexCenter};
  flex-direction: column;
`;
export const StyledTitleBox = styled(motion.div)`
  flex-direction: column;
  width: 800px;
  ${media.desktop`width: 80vw;`};
`;
export const StyledOverline = styled.h2`
  text-align: left;
  font-size: ${fontSizes.h3};
  font-weight: 400;
  font-family: ${fonts.Poppins};
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1;
  ${media.tablet`font-size: ${fontSizes.xxl}`};
  ${media.thone`text-align: center;`}
`;
export const StyledTitle = styled.h1`
  text-align: left;
  font-family: ${fonts.Poppins};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 114px;
  line-height: 0.75;
  font-weight: 400;
  margin-left: -6px;
  ${media.tablet`font-size: 92px;`};
  ${media.thone`text-align: center; font-size: 68px;`}
  ${media.phone`font-size: 56px;`};
`;
export const StyledSubtitle = styled.h2`
  width: 800px;
  ${media.desktop`width: 80vw;`};
  text-align: right;
  font-size: ${fontSizes.h3};
  font-weight: 400;
  font-family: ${fonts.Poppins};
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1;
  ${media.tablet`font-size: ${fontSizes.xxl}`};
  ${media.thone`text-align: center;`}
`;
export const Line = styled.hr`
  width: 800px;
  height: 4px;
  ${media.desktop`width: 80vw;`};
  background-color: ${({ theme }) => theme.colors.textPrimary};
`;
export const StyledNavLinks = styled.div`
  width: 800px;
  ${media.desktop`width: 80vw;`};
  align-items: center;
`;
export const StyledNavList = styled.ol`
  height: 40px;
  ${mixins.flexCenter};
  padding: 0;
  margin: 0;
  list-style: none;
`;
export const StyledNavListItem = styled.li`
  margin: 0 10px;
  ${media.thone`margin: 0 0px;`}
  font-size: ${fontSizes.lg};
`;
export const StyledNavListLink = styled(Link)`
  padding: 8px 6px;
`;
