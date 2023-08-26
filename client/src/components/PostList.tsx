'use client';
import { SimplePost } from '@/model/post';
import useSWR from 'swr';
import PostCard from './PostCard';
import GridSpinner from './ui/GridSpinner';

const PostList = () => {
  const { data: posts, isLoading, error } = useSWR<SimplePost[]>('/api/posts');
  return (
    <section>
      {isLoading && (
        <div className='text-center mt-32'>
          <GridSpinner color='red' />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post, index) => (
            <li key={post.id} className='mb-4'>
              {post.text}
              <PostCard post={post} priority={index < 2} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default PostList;
