'use client';
import { SimplePost } from '@/model/post';
import useSWR from 'swr';

const PostList = () => {
  const { data: posts, isLoading, error } = useSWR<SimplePost[]>('/api/posts');
  console.log(posts);
  return (
    <p>{posts && posts.map((post) => <li key={post.id}>{post.text}</li>)}</p>
  );
};

export default PostList;
