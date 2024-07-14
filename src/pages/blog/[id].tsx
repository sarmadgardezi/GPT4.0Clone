import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { getAllPostIds, getPostData } from '@/lib/lib';
import { PostData } from '@/types/blog';

export default function Post({ postData }: { postData: PostData }) {
  return (
    <div>
      <h1>{postData.title}</h1>
      <div>{postData.date}</div>
      <MDXRemote {...postData.content} />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params!.id as string);
  return {
    props: {
      postData
    }
  };
};
