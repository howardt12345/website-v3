import * as fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export const aboutDirectory = '/content/about';

export function getAboutData() {
  const filePath = path.join(
    process.cwd(),
    'public',
    aboutDirectory,
    'index.md',
  );
  const fileContents = fs.readFileSync(filePath);

  return matter(fileContents);
}
