'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import HomeIcon from './ui/icons/HomeIcon';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import NewIcon from './ui/icons/NewIcon';
import NewFillIcon from './ui/icons/NewFillIcon';
import SearchIcon from './ui/icons/SearchIcon';
import SearchFillIcon from './ui/icons/SearchFillIcon';

const menu = [
  {
    href: '/',
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
  },
  {
    href: '/search',
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
  },
  {
    href: '/new',
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
  },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <div className='flex items-center justify-between mx-auto p-4 border border-b-gray-300 border-b-4'>
      <h1 className='text-3xl font-bold'>Instantgram</h1>
      <ul className='flex items-center gap-6 text-4xl'>
        {menu.map(({ href, icon, clickedIcon }) => (
          <li key={href}>
            <Link href={href}>{href === pathname ? clickedIcon : icon}</Link>
          </li>
        ))}
        <li>
          <p className='px-1 py-2 border-4 border-purple-500 rounded-md text-xl'>
            Sign in
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Header;
