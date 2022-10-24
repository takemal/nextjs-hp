import Link from 'next/link';
import { PostType } from '../../types/post';

type Props = {
  post: PostType;
};

export const PostItem = (props: Props) => {
  const { post } = props;
  return (
    <div>
      <span>{post.id}</span>
      {' : '}
      <Link href={`/posts/${post.id}`}>
        <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">{post.title}</span>
      </Link>
    </div>
  );
};
