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
    <button className='btn' onClick={handleClick}>
      <Icon path={mdiEraserVariant} size='48px' />
    </button>
  );
};

export default Eraser;
