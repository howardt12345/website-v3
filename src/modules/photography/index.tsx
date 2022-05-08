import React from 'react';

import { Layout } from '@components';
import { Heading, Section } from '@styles';

const PhotographyPage = () => {
  return (
    <Layout isHome={false} animateNav={false} footer={true}>
      <Section>
        <Heading>Photography</Heading>
      </Section>
    </Layout>
  );
};

export default PhotographyPage;
