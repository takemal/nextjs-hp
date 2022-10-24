import { GetStaticProps } from 'next';
import React from 'react';
import { PostItem } from '../components/blog/PostItem';
import { Layout } from '../components/Layout';
import { PostType } from '../types/post';
import { getAllPostsData } from '../utils/posts';

//ビルド時に実施
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
};

type Props = {
  posts: PostType[];
};

const blog = (props: Props) => {
  const { posts } = props;
  return (
    <Layout title="Blog">
      <ul className="m-10">{posts && posts.map((post: any) => <PostItem key={post.id} post={post} />)}</ul>
    </Layout>
  );
};

export default blog;
