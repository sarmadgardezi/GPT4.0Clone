// src/pages/blog/[slug].tsx

import fs from 'fs';
import path from 'path';
import { GetStaticPaths, GetStaticProps } from 'next';
import matter from 'gray-matter';
import React from 'react';
import { Post } from '@/types/blogposts';
import Link from 'next/link';
import Menu from '@/components/layout/header/header';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css';

interface PostPageProps {
  post: Post;
  mdxSource: MDXRemoteSerializeResult;
}

const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold mt-6 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold mt-5 mb-3" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-bold mt-4 mb-2" {...props} />,
  p: (props: any) => <p className="mt-2 mb-4 leading-relaxed" {...props} />,
  a: (props: any) => <a className="text-blue-500 hover:underline" {...props} />,
  img: (props: any) => <img className="my-4 mx-auto" {...props} />,
};

const PostPage: React.FC<PostPageProps> = ({ post, mdxSource }) => {
  return (
    <>
      <Menu />
      <main className="mt-10">
        <div
          className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
          style={{ height: '24em' }}
        >
          <div
            className="absolute left-0 bottom-0 w-full h-full z-10"
            style={{
              backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))',
            }}
          ></div>
          <img
            src={post.image}
            className="absolute left-0 top-0 w-full h-full z-0 object-cover"
            alt={post.title}
          />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <Link href={`/category/${post.category.toLowerCase()}`} passHref className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
              {post.category}
            </Link>
            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
              {post.title}
            </h2>
            <div className="flex mt-3">
              <img
                src={post.authorImage}
                className="h-10 w-10 rounded-full mr-2 object-cover"
                alt={post.author}
              />
              <div>
                <p className="font-semibold text-gray-200 text-sm">{post.author}</p>
                <p className="font-semibold text-gray-400 text-xs">{post.date}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 lg:px-0 mt-12 text-white max-w-screen-md mx-auto text-lg leading-relaxed">
          <MDXRemote {...mdxSource} components={components} />
        </div>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), 'src', 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.mdx?$/, '') },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postsDirectory = path.join(process.cwd(), 'src', 'posts');
  const filePath = path.join(postsDirectory, `${params?.slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContents);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  });

  return {
    props: {
      post: {
        slug: params?.slug || '',
        title: data.title || 'Untitled',
        image: data.image || '/default-image.jpg',
        excerpt: data.excerpt || '',
        date: data.date || '',
        author: data.author || 'Anonymous',
        authorImage: data.authorImage || '/default-author.jpg',
        readTime: data.readTime || '0',
        category: data.category || 'Uncategorized',
      },
      mdxSource,
    },
  };
};

export default PostPage;
