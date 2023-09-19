'use client';

import { useState } from 'react';
import useSWR from 'swr';

const UserSearch = () => {
  const [keyword, setKeyword] = useState('bob');
  const { data, isLoading, error } = useSWR(`/api/search/${keyword}`);
  console.log(data);
  return <div></div>;
};
export default UserSearch;
