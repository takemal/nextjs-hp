import fetch from 'node-fetch';
import { PostType } from '../types/post';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export const getAllPostsData = async () => {
  const res = await fetch(apiUrl);
  const posts = (await res.json()) as PostType[];
  return posts;
};

// 全ポストデータを取得する
export const getAllPostIds = async () => {
  const res = await fetch(apiUrl);
  const posts = (await res.json()) as PostType[];

  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
};

// 特定ポストデータを取得する
export const getPostData = async (id: string) => {
  const res = await fetch(`${apiUrl}/${id}/`);
  const post = (await res.json()) as PostType;
  return post;
};
