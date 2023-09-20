import { ProfileUser } from '@/model/user';
import Link from 'next/link';
import React from 'react';
import Avatar from './Avatar';

interface Props {
  user: ProfileUser;
}

const UserCard = ({
  user: { name, username, image, following, followers },
}: Props) => {
  return (
    <Link href={`/user/${username}`}>
      <Avatar image={image} />
      <div>
        <p>{username}</p>
        <p>{name}</p>
        <p>{`${followers} followers ${following} following`}</p>
      </div>
    </Link>
  );
};

export default UserCard;
