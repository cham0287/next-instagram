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
import ColorButton from './ui/ColorButton';

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
    <div className='flex items-center justify-between px-6'>
      <h1 className='text-3xl font-bold'>Instantgram</h1>
      <nav>
        <ul className='flex items-center gap-4 p-4'>
          {menu.map(({ href, icon, clickedIcon }) => (
            <li key={href}>
              <Link href={href}>{href === pathname ? clickedIcon : icon}</Link>
            </li>
          ))}
          <ColorButton text='Sign in' onClick={() => {}} />
        </ul>
      </nav>
    </div>
  );
};

export default Header;
