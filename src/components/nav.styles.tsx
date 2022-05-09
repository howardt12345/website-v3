import styled from 'styled-components';
import { theme, mixins, media } from '@styles';
import Link from 'next/link';

const { fontSizes, fonts } = theme;

export const StyledContainer = styled.header<{
  scrollDirection: string;
}>`
  ${mixins.flexBetween};
  position: fixed;
  top: 0;
  padding: 0px 50px;
  background-color: ${({ theme }) => theme.colors.background};
  transition: ${theme.transition};
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
  height: ${(props) =>
    props.scrollDirection === 'none' ? theme.navHeight : theme.navScrollHeight};
  box-shadow: ${(props) =>
    props.scrollDirection === 'up'
      ? `0 10px 30px -10px ${({ theme }: { theme: any }) =>
          theme.translucent_bg}`
      : 'none'};
  transform: translateY(
    ${(props) =>
      props.scrollDirection === 'down' ? `-${theme.navScrollHeight}` : '0px'}
  );
  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 25px;`};
`;
export const StyledNav = styled.nav`
  ${mixins.flexBetween};
  width: 100%;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${fonts.Raleway};
  counter-reset: item 0;
  z-index: 12;
`;
export const StyledTitle = styled.h2`
  font-size: ${fontSizes.xxl};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${fonts.Poppins};
  font-weight: normal;
  padding: 0;
  margin: 0;
  display: block;
  ${media.tablet`display: none;`};
`;
export const StyledLogo = styled.div`
  colo: r ${({ theme }) => theme.colors.accent};
  fill: ${({ theme }) => theme.colors.accent};
  ${mixins.flexCenter};
  a {
    display: none;
    ${media.tablet`display: block;`};
    fill: ${({ theme }) => theme.colors.accent};
    width: 42px;
    height: 42px;
    &:hover,
    &:focus {
      svg {
        fill: ${({ theme }) => theme.colors.translucent_accent};
      }
    }
    svg {
      fill: ${({ theme }) => theme.colors.accent};
      transition: ${theme.transition};
      user-select: none;
    }
  }
`;
export const StyledHamburger = styled.div`
  ${mixins.flexCenter};
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  display: none;
  ${media.tablet`display: flex;`};
`;
export const StyledHamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: ${theme.hamburgerWidth}px;
  height: 24px;
`;
export const StyledHamburgerInner = styled.div<{ menuOpen: boolean }>`
  background-color: ${({ theme }) => theme.colors.accent};
  position: absolute;
  width: ${theme.hamburgerWidth}px;
  height: 2px;
  border-radius: ${theme.borderRadius};
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${(props) => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${(props) => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${(props) =>
      props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
  );
  &:before,
  &:after {
    content: '';
    display: block;
    background-color: ${({ theme }) => theme.colors.accent};
    position: absolute;
    left: auto;
    right: 0;
    width: ${theme.hamburgerWidth}px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }
  &:before {
    width: ${(props) => (props.menuOpen ? `100%` : `120%`)};
    top: ${(props) => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${(props) => (props.menuOpen ? 0 : 1)};
    transition: ${(props) =>
      props.menuOpen ? theme.hamBeforeActive : theme.hamBefore};
  }
  &:after {
    width: ${(props) => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${(props) => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${(props) => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${(props) =>
      props.menuOpen ? theme.hamAfterActive : theme.hamAfter};
  }
`;
export const StyledLink = styled.div`
  display: flex;
  align-items: center;
  ${media.tablet`display: none;`};
`;
export const StyledList = styled.ol`
  ${mixins.flexBetween};
  padding: 0;
  margin: 0;
  list-style: none;
`;
export const StyledListItem = styled.li`
  margin: 0 8px;
  position: relative;
  font-size: ${fontSizes.lg};
`;
export const StyledListLink = styled(Link)`
  padding: 8px 6px;
`;
