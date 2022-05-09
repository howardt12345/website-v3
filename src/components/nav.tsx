import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { throttle } from 'throttle-typescript';
import config from '@lib/config';
import { Menu, ToggleButton } from '@components';
import { IconLogo } from '@components/icons';
import {
  StyledContainer,
  StyledNav,
  StyledTitle,
  StyledListLink,
  StyledLogo,
  StyledHamburger,
  StyledHamburgerBox,
  StyledHamburgerInner,
  StyledLink,
  StyledList,
  StyledListItem,
} from './nav.styles';

import { theme } from '@styles';
const { loaderDelay } = theme;

const DELTA = 5;

class Nav extends Component<{ animate: boolean }> {
  state = {
    isMounted: !this.props.animate,
    menuOpen: false,
    scrollDirection: 'none',
    lastScrollTop: 0,
  };

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({ isMounted: true }, () => {
          window.addEventListener('scroll', () =>
            throttle(this.handleScroll, 100),
          );
          window.addEventListener('resize', () =>
            throttle(this.handleResize, 100),
          );
          window.addEventListener('keydown', (e) => this.handleKeydown(e));
        }),
      100,
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handleScroll());
    window.removeEventListener('resize', () => this.handleResize());
    window.removeEventListener('keydown', (e) => this.handleKeydown(e));
  }

  toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });

  handleScroll = () => {
    const { isMounted, menuOpen, scrollDirection, lastScrollTop } = this.state;
    const fromTop = window.scrollY;

    // Make sure they scroll more than DELTA
    if (!isMounted || Math.abs(lastScrollTop - fromTop) <= DELTA || menuOpen) {
      return;
    }

    if (fromTop < DELTA) {
      this.setState({ scrollDirection: 'none' });
    } else if (fromTop > lastScrollTop && fromTop > config.navHeight) {
      if (scrollDirection !== 'down') {
        this.setState({ scrollDirection: 'down' });
      }
    } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== 'up') {
        this.setState({ scrollDirection: 'up' });
      }
    }

    this.setState({ lastScrollTop: fromTop });
  };

  handleResize = () => {
    if (window.innerWidth > 768 && this.state.menuOpen) {
      this.toggleMenu();
    }
  };

  handleKeydown = (e: KeyboardEvent) => {
    if (!this.state.menuOpen) {
      return;
    }

    if (e.which === 27 || e.key === 'Escape') {
      this.toggleMenu();
    }
  };

  render() {
    const { isMounted, menuOpen, scrollDirection } = this.state;
    const { animate } = this.props;
    const timeout = animate ? loaderDelay : 0;
    const fadeClass = animate ? 'fade' : '';
    const fadeDownClass = animate ? 'fadedown' : '';

    return (
      <StyledContainer scrollDirection={scrollDirection}>
        <StyledNav>
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeClass} timeout={timeout}>
                <StyledTitle>
                  <StyledListLink href={'/'}>
                    {config.siteTitle.toUpperCase()}
                  </StyledListLink>
                </StyledTitle>
              </CSSTransition>
            )}
          </TransitionGroup>
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeClass} timeout={timeout}>
                <StyledLogo>
                  {animate ? (
                    // eslint-disable-next-line @next/next/no-html-link-for-pages
                    <a href='/' aria-label='home'>
                      <IconLogo />
                    </a>
                  ) : (
                    // eslint-disable-next-line @next/next/no-html-link-for-pages
                    <a href='/' aria-label='home'>
                      <IconLogo />
                    </a>
                  )}
                </StyledLogo>
              </CSSTransition>
            )}
          </TransitionGroup>
          <ToggleButton />
          <div /> {/* to fix alignment */}
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeClass} timeout={timeout}>
                <StyledHamburger onClick={this.toggleMenu}>
                  <StyledHamburgerBox>
                    <StyledHamburgerInner menuOpen={menuOpen} />
                  </StyledHamburgerBox>
                </StyledHamburger>
              </CSSTransition>
            )}
          </TransitionGroup>
          <StyledLink>
            <StyledList>
              <TransitionGroup component={null}>
                {isMounted &&
                  config.navLinks &&
                  config.navLinks.map(({ url, name }, i) => (
                    <CSSTransition
                      key={i}
                      classNames={fadeDownClass}
                      timeout={timeout}
                    >
                      <StyledListItem
                        style={{
                          transitionDelay: `${animate ? i * 100 : 0}ms`,
                        }}
                      >
                        <StyledListLink href={url}>{name}</StyledListLink>
                      </StyledListItem>
                    </CSSTransition>
                  ))}
              </TransitionGroup>
            </StyledList>
          </StyledLink>
        </StyledNav>
        <Menu menuOpen={menuOpen} toggleMenu={this.toggleMenu} />
      </StyledContainer>
    );
  }
}

export default Nav;
