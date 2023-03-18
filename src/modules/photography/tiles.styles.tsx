import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import Dialog from '@reach/dialog';
import { media, mixins } from '@styles';
import Image from 'next/image';

const dialogFactor = 45;
const maxDialogWidth = 80;

interface DialogProps {
  width: number;
  height: number;
}

export const masonryBreakpoints = {
  default: 3,
  768: 2,
  480: 1,
};

export const StyledContainer = styled.div`
  display: flex;
`;
export const StyledImage = styled(Image)`
  cursor: pointer;
`;
export const StyledMasonry = styled(Masonry)`
  display: flex;
  .photography-tiles-column > span {
    margin: 0px 3px !important;
  }
  margin-top: 1.5rem;
`;
export const StyledDialog = styled(Dialog)`
  width: ${(props: DialogProps) =>
    (props.width / props.height) * dialogFactor > maxDialogWidth
      ? maxDialogWidth
      : (props.width / props.height) * dialogFactor}vw;
  ${media.tablet`width: 100vw;`};
  background-color: ${({ theme }) => theme.colors.background_secondary};
  aspect-ratio: ${(props: DialogProps) => props.width / props.height};
  [data-rmiz] {
    height: 100%;
  }
`;
export const StyledDialogButtons = styled.div`
  ${mixins.flexBetween}
  justify-content: flex-end;
  margin-top: 1rem;
`;
export const StyledImgContainer = styled.div`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
