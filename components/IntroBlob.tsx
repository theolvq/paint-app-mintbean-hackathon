import React, { FC } from 'react';

const IntroBlob: FC = () => {
  return (
    <div className='bg-gray-200 mx-4 py-8 px-12 rounded-lg shadow-2xl max-w-3xlbackdrop-blur-lg bg-opacity-30 text-gray-700 max-w-3xl'>
      <p>
        This project was designed, built and deployed for a hackathon organized
        by{' '}
        <a
          href='https://mintbean.io'
          className='link text-gray-700 hover:border-gray-700'
        >
          Mintbean
        </a>
        . It was designed to be a fun way to learn about HTML5 Canvas. The main
        library used was{' '}
        <a
          href='https://konvajs.org/'
          className='link text-gray-700 hover:border-gray-700'
        >
          Konva.
        </a>
      </p>
      <p>
        This site is powered by{' '}
        <a
          href='https://nextjs.org'
          target='_blank'
          rel='noreferrer'
          className='link text-gray-600 hover:border-gray-600'
        >
          Next.js
        </a>
        ,{' '}
        <a
          href='https://reactjs.org'
          target='_blank'
          rel='noreferrer'
          className='link text-gray-600 hover:border-gray-600'
        >
          React
        </a>
        ,{' '}
        <a
          href='https://www.typescriptlang.org'
          target='_blank'
          rel='noreferrer'
          className='link text-gray-600 hover:border-gray-600'
        >
          TypeScript
        </a>{' '}
        and{' '}
        <a
          href='https://tailwindcss.com'
          target='_blank'
          rel='noreferrer'
          className='link text-gray-600 hover:border-gray-600'
        >
          Tailwind.
        </a>
      </p>
    </div>
  );
};

export default IntroBlob;
