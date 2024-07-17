// src/utils/posts.ts

import path from 'path';
import matter from 'gray-matter';
import { Post } from '@/types/blogposts';
import fs from 'fs';

const postsDirectory = path.join(process.cwd(), 'src', 'posts');

export function getAllPosts(): Post[] {
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.mdx?$/, ''),
      title: data.title || 'Untitled',
      image: data.image || '/default-image.jpg',
      excerpt: data.excerpt || '',
      date: data.date || '',
      author: data.author || 'Anonymous',
      authorImage: data.authorImage || '/default-author.jpg',
      readTime: data.readTime || '0',
      category: data.category || 'Uncategorized',
    };
  });

  return posts;
}
