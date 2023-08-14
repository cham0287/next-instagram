import React from 'react';
import Avatar from './Avatar';
import { useSession } from 'next-auth/react';
import { User } from '@/model/user';

interface Props {
  user: User;
}

const SideBar = ({ user: { name, username, image } }: Props) => {
  return (
    <>
      <div>
        {image && <Avatar image={image} size='big' />}
        <p>{username}</p>
        <p>{name}</p>
      </div>
      <p>
        About ∙ Help ∙ Press ∙ Api ∙ Jobs ∙ Privacy ∙ Terms ∙ Location ∙
        Language
      </p>
      <p>@Copyright INSTANTGRAM from METAL</p>
    </>
  );
};

export default SideBar;
