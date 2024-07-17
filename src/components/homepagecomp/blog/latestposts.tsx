// src/components/homepagecomp/blog/latestposts.tsx
import React from "react";
import Link from "next/link";
import { Post } from "@/types/blogposts";

interface LatestPostsProps {
  posts: Post[];
}

const LatestPosts: React.FC<LatestPostsProps> = ({ posts }) => {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl bricolage font-bold bg-gradient-heading">
            The latest and greatest news
          </h2>
          <p className="mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
            Lorem ipsum dolor sit amet elit ut aliquam
          </p>
          <div className="mb-6 grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-10 md:grid-cols-3 lg:mb-12 lg:gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                passHref
                className="flex flex-col gap-4 rounded-md border border-solid border-gray-300 px-4 py-8 md:p-0"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-60 object-cover"
                />
                <div className="px-6 py-4">
                  <p className="mb-4 text-sm font-semibold uppercase text-gray-500">
                    {post.category}
                  </p>
                  <p className="mb-4 text-xl font-semibold">{post.title}</p>
                  <p className="mb-6 text-sm text-gray-500 sm:text-base lg:mb-8">
                    {post.excerpt}
                  </p>
                  <div className="flex">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="mr-4 h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <h6 className="text-base font-bold">{post.author}</h6>
                      <div className="flex flex-col lg:flex-row">
                        <p className="text-sm text-gray-500">{post.date}</p>
                        <p className="mx-2 hidden text-sm text-gray-500 lg:flex">
                          -
                        </p>
                        <p className="text-sm text-gray-500">
                          {post.readTime} mins read
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/blog" passHref className="rounded-md bg-black px-6 py-3 text-center font-semibold text-white">
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
