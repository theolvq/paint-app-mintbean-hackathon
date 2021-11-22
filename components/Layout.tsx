import React, { FC, ReactNode } from 'react';
import Link from 'next/link';
import Icon from '@mdi/react';
import { mdiGithub, mdiLinkedin, mdiTwitter } from '@mdi/js';
import Header from './Header';
import Footer from './Footer';
interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
