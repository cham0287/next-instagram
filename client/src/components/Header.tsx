'use client';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { RiSearchLine, RiSearchFill } from 'react-icons/ri';
import { BsPlusSquare, BsPlusSquareFill } from 'react-icons/bs';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  return (
    <div className='flex items-center justify-between mx-auto p-4 border border-b-gray-300 border-b-4'>
      <h1 className='text-3xl font-bold'>Instantgram</h1>
      <ul className='flex items-center gap-6 text-4xl'>
        <Link href='/'>
          {pathname === '/' ? <AiFillHome /> : <AiOutlineHome />}
        </Link>
        <Link href='/search'>
          {pathname === '/search' ? <RiSearchFill /> : <RiSearchLine />}
        </Link>
        <Link href='/new'>
          {pathname === '/new' ? <BsPlusSquareFill /> : <BsPlusSquare />}
        </Link>
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
