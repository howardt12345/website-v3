import { mixins, theme } from '@styles';
import styled from 'styled-components';

const { fontSizes, fonts } = theme;

export const StyledProjectInner = styled.div`
  ${mixins.boxShadow};
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 2rem 1.75rem;
  height: 100%;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;
export const StyledProject = styled.div`
  transition: ${theme.transition};
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${StyledProjectInner} {
      transform: translateY(-5px);
    }
  }
`;
export const StyledProjectHeader = styled.div`
  ${mixins.flexBetween};
  margin-bottom: 30px;
`;
export const StyledFolder = styled.div`
  color: ${({ theme }) => theme.colors.accent};
  svg {
    width: 40px;
    height: 40px;
  }
`;
export const StyledProjectLinks = styled.div`
  margin-right: -10px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;
export const StyledIconLink = styled.a`
  position: relative;
  top: -10px;
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
export const StyledProjectName = styled.h5`
  margin: 0 0 10px;
  font-size: ${fontSizes.xxl};
  color: ${({ theme }) => theme.colors.textPrimary};
`;
export const StyledProjectDescription = styled.div`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.textSecondary};
  a {
    ${mixins.inlineLink};
  }
`;
export const StyledTechList = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;
  li {
    font-family: ${fonts.Raleway};
    font-size: ${fontSizes.xs};
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.75;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
