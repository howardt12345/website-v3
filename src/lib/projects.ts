import * as fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export const projectsDirectory = '/content/projects';

export function getProjectsData() {
  const filePath = path.join(process.cwd(), 'public', projectsDirectory);

  const projectFiles = fs.readdirSync(filePath);

  const projects = projectFiles.map((fileName: string) => {
    const readFile = fs.readFileSync(path.join(filePath, fileName));
    const { content, data } = matter(readFile);
    return { content, data };
  });

  return projects;
}
