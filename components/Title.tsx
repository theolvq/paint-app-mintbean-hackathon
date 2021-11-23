import React, { FC } from 'react';

const Title: FC = () => {
  return (
    <div className='uppercase font-semibold text-4xl sm:text-5xl text-center mt-16'>
      <h1>
        Unleash your <br />{' '}
        <span className='font-extrabold text-5xl sm:text-6xl bg-gradient-to-br from-violet-600 to-cyan-400 via-indigo-600   bg-clip-text text-transparent'>
          creativity!
        </span>
      </h1>
    </div>
  );
};

export default Title;
