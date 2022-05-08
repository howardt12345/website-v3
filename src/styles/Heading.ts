import styled from 'styled-components';
import { theme } from './theme';
import media from './media';
const { fonts } = theme;

const Heading = styled.h1`
  text-align: left;
  font-family: ${fonts.Poppins};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 72px;
  font-weight: 400;
  ${media.bigDesktop`font-size: 72px;`};
  ${media.tablet`font-size: 64px;`};
  ${media.phablet`font-size: 48px;`};
`;

export default Heading;
