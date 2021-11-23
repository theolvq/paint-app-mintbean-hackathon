import React, { FC } from 'react';
import Image from 'next/image';
const Team: FC = () => {
  return (
    <section className='flex flex-col items-center max-w-screen-lg'>
      <h3 className='text-3xl font-bold mb-16'>Meet the team!</h3>
      <ul className='flex sm:flex-row flex-col items-center gap-32'>
        <li className='team-card'>
          <div className='w-32 h-32 mb-8'>
            {' '}
            <Image
              src='/dev-theo.jpg'
              width={250}
              height={250}
              alt="Theo the developer's portrait"
              className='rounded-full'
            />
          </div>
          <h4 className='text-lg font-semibold mb-4'>
            Theo, <br /> Software Engineer
          </h4>
          <p className='text-gray-500'>I am a developer who loves to code.</p>
        </li>
        <li className='team-card'>
          <div className='w-32 h-32  rounded-full mb-8'>
            <Image
              src='/designer-theo.jpg'
              width={250}
              height={250}
              alt="Theo the designer's portrait"
              className='rounded-full'
            />
          </div>
          <h4 className='text-lg font-semibold mb-4'>
            Theo, <br /> UI/UX Designer
          </h4>
          <p className='text-gray-500'>I am a designer who loves to design.</p>
        </li>
        <li className='team-card'>
          <div className='w-32 h-32 mb-8'>
            {' '}
            <Image
              src='/tester-theo.jpg'
              width={250}
              height={250}
              alt="Theo the tester's portrait"
              className='rounded-full'
            />
          </div>
          <h4 className='text-lg font-semibold mb-4'>
            Theo, <br /> QA Tester
          </h4>
          <p className='text-gray-500'>I am a tester who loves to test.</p>
        </li>
      </ul>
    </section>
  );
};

export default Team;
