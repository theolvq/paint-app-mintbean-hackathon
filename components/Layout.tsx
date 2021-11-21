import React, { FC, ReactNode } from 'react';
import Link from 'next/link';
interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <header className='flex items-center justify-center sticky top-0 w-full h-16 bg-gray-800 text-white z-50 uppercase font-semibold text-xl'>
        <nav>
          <ul className='flex justify-center items-center gap-8  '>
            <li className='border-0 hover:border-b-4 border-pink-400 transition-all'>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li className='border-0 hover:border-b-4 border-pink-400 transition-all'>
              <Link href='/paint'>
                <a>Paint!</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </>
  );
};

export default Layout;
