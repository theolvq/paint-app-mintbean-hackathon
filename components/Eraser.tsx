import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { mdiEraserVariant } from '@mdi/js';
import { Icon } from '@mdi/react';

interface IProps {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
}

const Eraser: FC<IProps> = ({ setColor, color }) => {
  const [previousColor, setPreviousColor] = useState('');

  const handleClick = () => {
    if (color !== '#ffffff') {
      setPreviousColor(color);
      setColor('#ffffff');
    } else {
      setColor(previousColor);
    }
  };

  return (
    <div className='group relative'>
      <button className='btn' onClick={handleClick}>
        <Icon path={mdiEraserVariant} />
      </button>
      <div className='tooltip'>
        Eraser
        <div className='tooltip-arrow' />
      </div>
    </div>
  );
};

export default Eraser;
