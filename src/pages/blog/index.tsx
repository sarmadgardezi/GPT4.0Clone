import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/lib';
import { PostData } from '@/types/blog';

export default function Blog({ allPostsData }: { allPostsData: PostData[] }) {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/blog/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small>{date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
};
