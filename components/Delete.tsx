import React, { FC, MouseEventHandler } from 'react';
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';

interface IProps {
  clearCanvas: MouseEventHandler<HTMLButtonElement>;
}

const Delete: FC<IProps> = ({ clearCanvas }) => {
  return (
    <div className='group relative'>
      <button className='btn' onClick={clearCanvas}>
        <Icon path={mdiDelete} size={1.5} />
      </button>
      <div className='tooltip'>
        Clear Canvas
        <div className='tooltip-arrow' />
      </div>
    </div>
  );
};

export default Delete;
