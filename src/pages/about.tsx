import AboutPage from "@modules/about";
import * as fs from 'fs';
import matter from 'gray-matter';
import { GetStaticProps } from "next";
import path from "path";

const aboutDirectory = path.join(process.cwd(), "content/about");

const About = (data: any) => {
  console.log(data);
  return <AboutPage data={data} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(aboutDirectory, "index.md");
  const fileContents = fs.readFileSync(filePath);

  const { data, content } = matter(fileContents);

  return {
    props: {
      frontMatter: data,
      content,
    },
  };
}

export default About;
