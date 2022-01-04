import fs from "fs";
import path from "path";
import matter from "gray-matter";

const aboutDirectory = path.join(process.cwd(), "content/about");

export function getData() {
  const aboutFile = path.join(aboutDirectory, "index.md");
  const fileContents = fs.readFileSync(aboutFile);
  const { data, content } = matter(fileContents);
  return {
    frontMatter: data,
    content,
  };
};