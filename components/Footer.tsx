import { mdiGithub, mdiLinkedin, mdiTwitter, mdiWeb } from '@mdi/js';
import Icon from '@mdi/react';
import React, { FC, useMemo } from 'react';

const Footer: FC = () => {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className='flex flex-col items-center bg-gray-800 text-gray-300'>
      <div className='flex flex-col items-center my-8 gap-4'>
        <h3 className='text-xl font-semibold'>Find me on the Internet</h3>
        <div className='flex items-center gap-4'>
          <a
            href='https://www.theoleveque.com'
            target='_blank'
            rel='noreferrer'
            title='My personal website'
          >
            <Icon path={mdiWeb} size={2} />{' '}
          </a>{' '}
          <a
            href='https://www.github.com/daawascript'
            target='_blank'
            rel='noreferrer'
            title='My github'
          >
            <Icon path={mdiGithub} size={2} />{' '}
          </a>{' '}
          <a
            href='https://www.twitter.com/daawascript'
            target='_blank'
            rel='noreferrer'
            title='My twitter'
          >
            <Icon path={mdiTwitter} size={2} />
          </a>
          <a
            href='https://www.linkedin.com/in/theoleveque/'
            target='_blank'
            rel='noreferrer'
            title='My linkedin'
          >
            <Icon path={mdiLinkedin} size={2} />
          </a>
        </div>
      </div>
      <h3 className='mb-16'>Paint app by daawascript &copy; {year}</h3>
    </footer>
  );
};

export default Footer;
