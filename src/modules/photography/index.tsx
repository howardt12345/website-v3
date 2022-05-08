import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { Layout } from '@components';
import { Heading, Main, Section, mixins, media, theme } from '@styles';
import { fromFirestore, Picture } from '@lib/photography';
import { TilesComponent } from './tiles';
import { SpinnerCircular } from 'spinners-react';

const { fontSizes, fonts } = theme;

const StyledContainer = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  min-height: 75vh;
`;
const StyledSubtitle = styled.h2`
  font-weight: 400;
  font-family: ${fonts.Raleway};
  font-size: ${fontSizes.xxl};
  margin-top: 20px;
`;
const StyledSpinner = styled(SpinnerCircular)`
  color: ${({ theme }) => theme.colors.accent} !important;
`;

const PhotographyPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Picture[]>([]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const tempData = await fromFirestore();
      setData(tempData ?? []);
      setIsLoading(false);
    };

    getData();
  }, []);

  return (
    <Layout isHome={false} animateNav={false} footer={true}>
      <Section>
        <Heading>Photography</Heading>
        {!isLoading && data.length > 0 && <TilesComponent data={data} />}
        {isLoading && (
          <StyledContainer>
            <StyledSpinner />
            <StyledSubtitle>Loading...</StyledSubtitle>
          </StyledContainer>
        )}
      </Section>
    </Layout>
  );
};

export default PhotographyPage;
