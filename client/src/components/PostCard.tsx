import { SimplePost } from '@/model/post';
import Avatar from './Avatar';
import Image from 'next/image';
import CommentForm from './CommentForm';
import ActionBar from './ActionBar';

interface Props {
  post: SimplePost;
  priority?: boolean;
}

const PostCard = ({
  post: { userImage, username, image, createdAt, likes, text },
  priority = false,
}: Props) => {
  return (
    <article className='rounded-lg shadow=md border border-gray'>
      <div className='flex items-center p-2'>
        <Avatar image={userImage} size='medium' highlight />
        <span className='text-gray-900 font-bold ml-2'>{username}</span>
      </div>
      <Image
        className='w-full object-cover aspect-square'
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
        priority={priority}
      />
      <ActionBar
        likes={likes}
        username={username}
        text={text}
        createdAt={createdAt}
      />
      <CommentForm />
    </article>
  );
};
export default PostCard;
