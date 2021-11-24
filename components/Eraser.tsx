import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { mdiEraserVariant } from '@mdi/js';
import { Icon } from '@mdi/react';

interface IProps {
  tool: string;
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
  setTool: Dispatch<SetStateAction<string>>;
}

const Eraser: FC<IProps> = ({ setColor, color, setTool, tool }) => {
  const [previousColor, setPreviousColor] = useState('');
  const [previousTool, setPreviousTool] = useState('');

  const handleClick = () => {
    setPreviousTool(tool);
    setPreviousColor(color);
    if (tool !== 'eraser') {
      setTool('eraser');
    } else {
      setTool(previousTool);
      setColor(previousColor);
    }
  };

  return (
    <div className='group relative'>
      <button className='btn' onClick={handleClick}>
        <Icon path={mdiEraserVariant} size={1.5} />
      </button>
      <div className='tooltip'>
        Eraser
        <div className='tooltip-arrow' />
      </div>
    </div>
  );
};

export default Eraser;
