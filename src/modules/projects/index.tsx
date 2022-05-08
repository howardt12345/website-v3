import React from 'react';

import { Layout } from '@components';
import { Heading, Section } from '@styles';

const ProjectsPage = () => {
  return (
    <Layout isHome={false} animateNav={false} footer={true}>
      <Section>
        <Heading>Projects</Heading>
      </Section>
    </Layout>
  );
};

export default ProjectsPage;
