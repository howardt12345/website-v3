import styled from 'styled-components';
import { theme, media } from '@styles';

const { fontSizes, fonts } = theme;
export const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, 33%));
  ${media.bigDesktop`grid-template-columns: repeat(2, minmax(140px, 50%));`};
  ${media.tablet`grid-template-columns: repeat(3, minmax(140px, 33%));`};
  ${media.thone`grid-template-columns: repeat(2, minmax(140px, 50%));`};
  ${media.phone`grid-template-columns: none;`};
  overflow: hidden;
  padding: 0;
  margin: 0.5rem 0;
  list-style: none;
`;
export const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${fonts.Raleway};
  font-size: ${fontSizes.sm};
  color: ${({ theme }) => theme.colors.textPrimary};
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.accent};
    font-size: ${fontSizes.md};
    line-height: 12px;
  }
`;
export const SkillsSectionTitle = styled.h2`
  text-align: left;
  font-family: ${fonts.Poppins};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 400;
  font-size: 24px;
`;
