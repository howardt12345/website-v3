import React, { useState } from 'react';

import Masonry from 'react-masonry-css';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';

import {
  masonryBreakpoints,
  StyledDialog,
  StyledDialogButtons,
  StyledImage,
  StyledImgContainer,
  StyledMasonryContainer,
  StyledMasonryTile,
} from './tiles.styles';
import { Button } from '@styles';
import { Picture } from '@lib/photography';

import '@reach/dialog/styles.css';
import 'react-medium-image-zoom/dist/styles.css';

export const TilesComponent = ({ data }: { data: Picture[] }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <div>
      <StyledMasonryContainer>
        <Masonry
          breakpointCols={masonryBreakpoints}
          className='photography-tiles'
          columnClassName='photography-tiles-column'
        >
          {data.map((item: any, index: any) => {
            return (
              <StyledMasonryTile
                key={index}
                width={item.width * 200}
                height={item.height * 200}
              >
                <StyledImage
                  src={item.getUrl()}
                  alt={item.getUrl()}
                  width={item.width * 100}
                  height={item.height * 100}
                  onClick={() => {
                    setCurrentImage(index);
                    open();
                  }}
                />
              </StyledMasonryTile>
            );
          })}
        </Masonry>
      </StyledMasonryContainer>
      <StyledDialog
        width={data[currentImage]?.width}
        height={data[currentImage]?.height}
        isOpen={showDialog}
        onDismiss={close}
        aria-label='Image'
      >
        <StyledImgContainer>
          <Zoom>
            <Image
              src={data[currentImage]?.getUrl()}
              alt={data[currentImage]?.getUrl()}
              fill
              priority
            />
          </Zoom>
        </StyledImgContainer>
        <StyledDialogButtons>
          <Button onClick={close}>Close</Button>
        </StyledDialogButtons>
      </StyledDialog>
    </div>
  );
};
