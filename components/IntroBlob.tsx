import React, { FC } from 'react';
import Image from 'next/image';

const IntroBlob: FC = () => {
  return (
    <>
      <h1 className='capitalize font-semibold text-4xl sm:text-6xl text-center mt-16 text-gray-100'>
        About{' '}
        <span className='font-extrabold text-4xl sm:text-6xl bg-gradient-to-br from-violet-600 to-cyan-400 via-indigo-600   bg-clip-text text-transparent'>
          paint!
        </span>
      </h1>
      <div className='max-w-6xl flex flex-col sm:flex-row  items-center gap-16 px-8 text-gray-50 text-lg'>
        <div className='w-full'>
          <h2 className='text-2xl font-bold tracking-wider mb-4 text-gray-800'>
            Paint!
          </h2>
          <p className='mb-2'>
            This project was designed, built and deployed in one week for a
            hackathon organized by{' '}
            <a
              href='https://mintbean.io'
              className='link text-gray-700 hover:border-gray-700'
            >
              Mintbean
            </a>
            . The requirements stated :
            <blockquote className='italic text-gray-100 my-1'>
              &#34;As a user, I can drag my mouse across the screen to make
              free-form lines.&#34;
            </blockquote>{' '}
            <p className='text-center '>AND/OR</p>
            <blockquote className='italic text-gray-100 my-1'>
              &#34;As a user, I can click areas of the screen with my mouse to
              fill them with a color, texture or pattern.&#34;
            </blockquote>
          </p>
        </div>
        <div className='image'>
          <Image
            src='/draw.svg'
            width={1280}
            height={960}
            alt='girl designing on computer'
          />
        </div>
      </div>
      <div className='max-w-6xl flex flex-col sm:flex-row-reverse items-center gap-16 px-8 text-gray-50 text-lg'>
        <div className='w-full'>
          <h2 className='text-2xl font-bold tracking-wider mb-4 text-gray-800'>
            Code!
          </h2>
          <p className='mb-4'>
            The main library used was{' '}
            <a
              href='https://konvajs.org/'
              className='link text-gray-700 hover:border-gray-700'
            >
              Konva.
            </a>{' '}
            In this project, you can draw on a canvas and save your work to your
            computer. You can also use the eraser to clear the canvas. You can
            also use the brush to draw different shapes. You can pick any color
            you&#39;d like.
          </p>
          <p className='mb-8'>
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
              Tailwind
            </a>
            . This is my favorite stack for modern, interactive web apps.
          </p>
        </div>
        <div className='image'>
          <Image
            src='/code.svg'
            width={1280}
            height={960}
            alt='girl designing on computer'
          />
        </div>
      </div>
    </>
  );
};

export default IntroBlob;
