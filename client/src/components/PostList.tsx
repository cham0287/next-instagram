'use client';
import { SimplePost } from '@/model/post';
import { GridLoader } from 'react-spinners';
import useSWR from 'swr';
import PostCard from './PostCard';

const PostList = () => {
  const { data: posts, isLoading, error } = useSWR<SimplePost[]>('/api/posts');
  return (
    <section>
      {isLoading && (
        <div className='text-center mt-32'>
          <GridLoader color='red' />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post) => (
            <li key={post.id} className='mb-4'>
              {post.text}
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default PostList;
