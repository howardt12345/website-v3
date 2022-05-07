import React from 'react';

import AboutPage from '@modules/about';
import { GetStaticProps } from 'next';
import { getAboutData } from '@lib/about';

const About = (data: any) => {
  return <AboutPage {...data} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const { data, content } = getAboutData();

  return {
    props: {
      frontMatter: data,
      content,
    },
  };
};

export default About;
