import React, { FC, ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Paint!</title>
        <meta
          name='description'
          content='A free paint app to unleash your creativity! Made with love by Theo Leveque, web developer'
        />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <Header />
      <main className='min-h-screen flex flex-col items-center gap-16 pb-32 bg-gradient-to-br from-cyan-300 to-violet-500 via-fuschia-400'>
        {children}
      </main>

      <Footer />
    </>
  );
};

export default Layout;
