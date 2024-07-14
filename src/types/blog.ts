import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface PostData {
  id: string;
  title: string;
  date: string;
  content: MDXRemoteSerializeResult;
}
