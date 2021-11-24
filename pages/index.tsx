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
      <Title />
      <Cards />
      <IntroBlob />
      <Team />
    </>
  );
};

export default Home;
