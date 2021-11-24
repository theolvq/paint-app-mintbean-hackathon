import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Cards = () => {
  return (
    <div className='flex flex-col items-center gap-16'>
      <div className='card sm:flex-row-reverse'>
        <div className='w-full'>
          <h2 className='text-2xl mb-4 text-gray-600'>Be creative</h2>
          <p className='mb-4'>
            Create beautiful designs with your mouse. Pick a tool, a color, a
            size and go for it! Nothing can stop you, you can be Picasso too! Or
            Dali, or just be yourself and create something beautiful.
          </p>
          <p className='mb-8 text-sm text-gray-500'>
            Choose from millions of colors and a variety of line weight for all
            your tools.
          </p>
          <Link href='/paint'>
            <a className='link'>Be creative now.</a>
          </Link>
        </div>
        <div className='image'>
          <Image
            src='/color-width.gif'
            alt='app demo'
            width={1280}
            height={960}
            layout='responsive'
          />
        </div>
      </div>
      <div className='card '>
        <div className='w-full'>
          <h2 className='text-2xl mb-4 text-gray-600'>Think big</h2>
          <p className='mb-8'>
            Only your imagination is the limit. Think big. Imagine great things.
            Just paint and let your creative mind take over. You can create
            anything you want.
          </p>
          <p className='mb-8 text-sm text-gray-500'>
            You can pick circles or rectangles. Make them full of themselves or
            empty like air. Make them as big as your biggest thoughts.
          </p>
          <Link href='/paint'>
            <a className='link'>Think big now.</a>
          </Link>
        </div>
        <div className='image '>
          <Image
            src='/rect-circle.gif'
            alt='app demo'
            width={1280}
            height={960}
            layout='responsive'
          />
        </div>
      </div>
      <div className='card sm:flex-row-reverse'>
        <div className='w-full'>
          <h2 className='text-2xl mb-4 text-gray-600'>
            Anyone can be an artist
          </h2>
          <p className='mb-8'>
            Don&#39;t let what they told you hold you back. You too can paint,
            you just need the right tools. And it looks like you found them.
            Right here.{' '}
          </p>
          <p className='mb-8 text-sm text-gray-500'>
            Anyone also makes mistakes. You can learn from them. You can also
            use the eraser or just clear the canvas.
          </p>
          <Link href='/paint'>
            <a className='link'>Just paint now.</a>
          </Link>
        </div>
        <div className='image '>
          <Image
            src='/free-draw.gif'
            alt='app demo'
            width={1280}
            height={960}
            layout='responsive'
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
