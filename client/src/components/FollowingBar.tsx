'use client';
import useSWR from 'swr';
import { User } from '@/model/user';

interface Props {
  user: User;
}

const FollowingBar = ({ user }: Props) => {
  const { data, isLoading, error } = useSWR('/api/me');
  console.log(data);
  return <p>followingBar</p>;
};

export default FollowingBar;
