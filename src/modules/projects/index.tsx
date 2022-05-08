import React from 'react';

import styled from 'styled-components';
import { Layout } from '@components';
import { Heading, media, Section } from '@styles';
import { ProjectTile } from './projectTile';

const StyledGrid = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  position: relative;
  ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
`;

const ProjectsPage = ({ data }: { data: any }) => {
  data = data.filter((a: any) => a.data.showInProjects);
  data.sort((a: any, b: any) => (a.data.date < b.data.date ? 1 : -1));

  return (
    <Layout isHome={false} animateNav={false} footer={true}>
      <Section>
        <Heading>Projects</Heading>
        <StyledGrid>
          {data &&
            data.map((project: any, i: any) => (
              <ProjectTile project={project} key={i} />
            ))}
        </StyledGrid>
      </Section>
    </Layout>
  );
};

export default ProjectsPage;
