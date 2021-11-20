import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { mdiEraserVariant } from '@mdi/js';
import { Icon } from '@mdi/react';

interface IProps {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
  lineCap: CanvasLineCap;
  setLineCap: Dispatch<SetStateAction<CanvasLineCap>>;
}

const Eraser: FC<IProps> = ({ setColor, lineCap, setLineCap, color }) => {
  const [previousColor, setPreviousColor] = useState('');
  const [previousLineCap, setPreviousLineCap] =
    useState<CanvasLineCap>(lineCap);
  const handleClick = () => {
    if (color !== '#ffffff') {
      setPreviousColor(color);
      setPreviousLineCap(lineCap);
      setColor('#ffffff');
      setLineCap('square');
    } else {
      setColor(previousColor);
      setLineCap(previousLineCap);
    }
  };

  return (
    <button className='btn' onClick={handleClick}>
      <Icon path={mdiEraserVariant} size='48px' />
    </button>
  );
};

export default Eraser;
