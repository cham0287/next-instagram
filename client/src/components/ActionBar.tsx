import React from 'react';
import HeartIcon from './ui/icons/HeartIcon';
import BookmarkIcon from './ui/icons/BookmarkIcon';
import { parseDate } from '@/util/date';

interface Props {
  likes: string[];
  username: string;
  text: string;
  createdAt: string;
}

const ActionBar = ({ likes, username, text, createdAt }: Props) => {
  return (
    <>
      <div className='flex justify-between my-2 px-4'>
        <HeartIcon />
        <BookmarkIcon />
      </div>
      <div className='px-4 py-1'>
        <p className='text-sm font-bold mb-2'>{`${likes?.length ?? 0} ${
          likes?.length > 1 ? 'likes' : 'like'
        } `}</p>
        <p>
          <span className='font-bold mr-1'>{username}</span>
          {text}
        </p>
        <p className='text-xs text-neutral-500 uppercase my-2'>
          {parseDate(createdAt)}
        </p>
      </div>
    </>
  );
};

export default ActionBar;