import { NextPage } from 'next';
import React from 'react';
import Cards from '../../components/Cards';
import Team from '../../components/Team';

const About: NextPage = () => {
  return (
    <>
      <Cards />
      <Team />
    </>
  );
};

export default About;
