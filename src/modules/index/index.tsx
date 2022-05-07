import React, { useState, useEffect } from 'react';

import {
  Line,
  navDelay,
  StyledContainer,
  StyledNavLinks,
  StyledNavList,
  StyledNavListItem,
  StyledNavListLink,
  StyledOverline,
  StyledSubtitle,
  StyledTitle,
  StyledTitleBox,
} from './index.styles';
import {
  titleVariants,
  subtitleVariants,
  lineVariants,
  navVariants,
  toggleVariants,
} from './index.animations';
import IconButton from '@components/iconbutton';
import ToggleButton from '@components/toggle_button';
import { motion } from 'framer-motion';
import { Layout } from '@components';
import config from '@lib/config';
import * as lib from '@lib/home';

const { navLinks } = config;

const HomePage = () => {
  const isBrowser = typeof window !== 'undefined';
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWidth(window.innerWidth);
      }
    };
    window.addEventListener('resize', handleResize);

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeout);
    };
  }, [width, isBrowser, isMounted]);

  return (
    <Layout isHome={true} animateNav={false} footer={true}>
      <StyledContainer className='fillHeight'>
        {isMounted && (
          <StyledTitleBox
            key='overline'
            initial='hidden'
            animate='visible'
            variants={titleVariants}
          >
            <StyledOverline>{lib.overline}</StyledOverline>
            <StyledTitle>{lib.title}</StyledTitle>
          </StyledTitleBox>
        )}
        {isMounted && (
          <motion.div
            key='title'
            initial='hidden'
            animate='visible'
            variants={lineVariants}
          >
            <Line />
          </motion.div>
        )}
        {isMounted && (
          <motion.div
            key='subtitle'
            initial='hidden'
            animate='visible'
            variants={subtitleVariants}
          >
            <StyledSubtitle>
              {<div dangerouslySetInnerHTML={{ __html: lib.subtitle }} />}
            </StyledSubtitle>
          </motion.div>
        )}
        <StyledNavLinks>
          <StyledNavList>
            {isMounted &&
              navLinks &&
              navLinks.map(({ url, name }: { url: any; name: any }, i: any) => (
                <motion.div
                  key={'nav' + i}
                  custom={i}
                  initial='hidden'
                  animate='visible'
                  variants={navVariants}
                >
                  {width >= 600 && (
                    <StyledNavListItem>
                      <StyledNavListLink href={url}>
                        <a>{name}</a>
                      </StyledNavListLink>
                    </StyledNavListItem>
                  )}
                  {width < 600 && <IconButton name={name} url={url} />}
                </motion.div>
              ))}
          </StyledNavList>
        </StyledNavLinks>

        <motion.div
          key='toggle_button'
          initial='hidden'
          animate='visible'
          variants={toggleVariants}
        >
          <ToggleButton />
        </motion.div>
      </StyledContainer>
    </Layout>
  );
};

export default HomePage;
