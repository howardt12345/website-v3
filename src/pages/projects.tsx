import { getProjectsData } from '@lib/projects';
import ProjectsPage from '@modules/projects';
import { GetStaticProps } from 'next';
import React from 'react';

const Projects = (data: any) => {
  return <ProjectsPage {...data} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const data = getProjectsData();

  return {
    props: {
      data,
    },
  };
};

export default Projects;
