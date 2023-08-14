import React from 'react';

interface Props {
  image?: string | null;
  size?: 'big' | 'small';
  highlight?: boolean;
}

const Avatar = ({ image, size = 'big', highlight = false }: Props) => {
  return (
    <div className={getContainerStyle(size, highlight)}>
      {/*  eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`bg-white rounded-full ${getImageSizeStyle(size)}`}
        src={image ?? undefined}
        alt='user profile'
        referrerPolicy='no-referrer'
      />
    </div>
  );
};

export default Avatar;

const getContainerStyle = (size: string, hightlight: boolean): string => {
  const baseStyle = 'rounded-full flex justify-center items-center';
  const highlightStyle = hightlight
    ? 'bg-gradient-to-br from-fuchsia-600 via-rose-500 to-amber-300'
    : '';
  const sizeStyle = size === 'small' ? 'w-9 h-9' : 'w-[68px] h-[68px]';

  return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
};

const getImageSizeStyle = (size: string): string => {
  return size === 'small' ? 'w-[34px] h-[34px]' : 'w-16 h-16 p-[0.2rem]';
};
