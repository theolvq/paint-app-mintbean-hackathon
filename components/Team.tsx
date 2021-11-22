import React from 'react';

const Team = () => {
  return (
    <section className='flex flex-col items-center max-w-screen-lg'>
      <h3 className='text-3xl font-bold mb-16'>Meet the team!</h3>
      <ul className='flex items-center gap-32'>
        <li className='team-card'>
          <div className='w-32 h-32 bg-black rounded-full mb-8'></div>
          <h4 className='text-xl font-semibold mb-4'>
            Theo, <br /> Software Engineer
          </h4>
          <p className='text-gray-500'>I am a developer who loves to code.</p>
        </li>
        <li className='team-card'>
          <div className='w-32 h-32 bg-black rounded-full mb-8'></div>
          <h4 className='text-xl font-semibold mb-4'>
            Theo, <br /> UI/UX Designer
          </h4>
          <p className='text-gray-500'>I am a designer who loves to design.</p>
        </li>
        <li className='team-card'>
          <div className='w-32 h-32 bg-black rounded-full mb-8'></div>
          <h4 className='text-xl font-semibold mb-4'>
            Theo, <br /> QA Tester
          </h4>
          <p className='text-gray-500'>I am a tester who loves to test.</p>
        </li>
      </ul>
    </section>
  );
};

export default Team;
