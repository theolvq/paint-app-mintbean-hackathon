import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Cards from '../components/Cards';
import IntroBlob from '../components/IntroBlob';
import Team from '../components/Team';
import Title from '../components/Title';

const Home: NextPage = () => {
  return (
    <>
      <main className='min-h-screen flex flex-col items-center gap-16 pb-32 bg-gradient-to-br from-cyan-300 to-violet-500 via-fuschia-400'>
        <Title />
        <IntroBlob />
        <Cards />
        <Team />
      </main>
    </>
  );
};

export default Home;

<div className='card sm:flex-row-reverse'>
  <div className='w-full'>
    <h2 className='text-2xl mb-4 text-gray-600'>Think big</h2>
    <p className='mb-4'>
      Only your imagination is the limit. Think big. Imagine great things. Just
      paint and let your creative mind take over.{' '}
    </p>
    <p className='mb-8 text-sm text-gray-500'>
      Choose from millions of colors and a variety of line weight for all your
      tools.
    </p>
    <Link href='/paint'>
      <a className='link'>Think big now.</a>
    </Link>
  </div>
  <div className='image'>
    <Image
      src='/rect-circle.gif'
      alt='app demo'
      width={1280}
      height={960}
      layout='responsive'
    />
  </div>
</div>;
