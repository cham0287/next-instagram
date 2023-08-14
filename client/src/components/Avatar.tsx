import React from 'react';

interface Props {
  image?: string | null;
  size?: 'big' | 'small';
}

const Avatar = ({ image, size = 'small' }: Props) => {
  return (
    <div
      className={`${
        size === 'small' ? 'w-9 h-9' : 'w-12 h-12'
      } rounded-full bg-gradient-to-br from-fuchsia-600 via-rose-500 to-amber-300`}
    >
      {/*  eslint-disable-next-line @next/next/no-img-element */}
      <img
        className='rounded-full p-[0.1rem]'
        src={image ?? undefined}
        alt='user profile'
        referrerPolicy='no-referrer'
      />
    </div>
  );
};

export default Avatar;
