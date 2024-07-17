// src/pages/index.tsx
import Head from "next/head";
import React from "react";
import Hero from "@/components/homepagecomp/hero/hero";
import Features from "@/components/homepagecomp/hero/features";
import Points from "@/components/homepagecomp/points/points";
import { Faqs } from "@/components/homepagecomp/faqs/faqs";
import LatestPosts from "@/components/homepagecomp/blog/latestposts";
import Footer from "@/components/layout/footer/footer";
import Count from "@/components/homepagecomp/counts";
import { GetStaticProps } from "next";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { Post } from "@/types/blogposts";

interface HomePageProps {
  latestPosts: Post[];
}

const HomePage: React.FC<HomePageProps> = ({ latestPosts }) => {
  return (
    <React.Fragment>
      <Head>
        <title>My Home Closet</title>
        <meta name="description" content="The latest news and updates" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen relative">
        <Hero />
        <Features />
        <Count />
        <Points />
        <LatestPosts posts={latestPosts} />
        <Faqs />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), "src", "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.mdx?$/, ""),
      title: data.title,
      image: data.image,
      excerpt: data.excerpt,
      date: data.date,
      author: data.author,
      authorImage: data.authorImage,
      readTime: data.readTime,
      category: data.category,
    };
  });

  const latestPosts = posts.slice(0, 3);

  return {
    props: {
      latestPosts,
    },
  };
};

export default HomePage;
