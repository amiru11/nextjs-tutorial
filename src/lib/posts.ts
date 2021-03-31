import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type Post = {
  id: string;
  title: string;
  date: string;
};

const postsDirectory = path.join(process.cwd(), 'src/posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: Post[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ''); // Parse fileName and fileName to unique Key.

    // Create Data Contents as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const { title, date } = matterResult.data;
    return {
      id,
      title,
      date,
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
