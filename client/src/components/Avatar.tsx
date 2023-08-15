type AvatarSize = 'big' | 'medium' | 'small';
interface Props {
  image?: string | null;
  size?: AvatarSize;
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

const getContainerSize = (size: AvatarSize): string => {
  switch (size) {
    case 'small':
      return 'w-9 h-9';
    case 'medium':
      return 'w-11 h-11';
    case 'big':
      return 'w-[68px] h-[68px]';
    default:
      return 'w-[68px] h-[68px]';
  }
};

const getImageSizeStyle = (size: AvatarSize): string => {
  switch (size) {
    case 'small':
      return 'w-[34px] h-[34px] p-[0.1rem]';
    case 'medium':
      return 'w-[42px] h-[42px] p-[0.1rem]';
    case 'big':
      return 'w-16 h-16 p-[0.2rem]';
    default:
      return 'w-16 h-16 p-[0.2rem]';
  }
};

const getContainerStyle = (size: AvatarSize, hightlight: boolean): string => {
  const baseStyle = 'rounded-full flex justify-center items-center';
  const highlightStyle = hightlight
    ? 'bg-gradient-to-br from-fuchsia-600 via-rose-500 to-amber-300'
    : '';
  const sizeStyle = getContainerSize(size);

  return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
};
