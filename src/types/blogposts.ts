// src/types/blogposts.ts

export interface Post {
    slug: string;
    title: string;
    image: string;
    excerpt: string;
    date: string;
    author: string;
    authorImage: string;
    readTime: string;
    category: string;
    content?: string; // Optional field for post content
  }
  