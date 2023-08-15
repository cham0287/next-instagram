'use client';
import useSWR from 'swr';
import { DetailUser } from '@/model/user';

const FollowingBar = () => {
  const { data, isLoading, error } = useSWR<DetailUser>('/api/me');
  console.log(data);
  return <p>followingBar</p>;
};

export default FollowingBar;
