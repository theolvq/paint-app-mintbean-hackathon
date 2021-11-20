import React, { FC, MouseEventHandler } from 'react';
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';

interface IProps {
  clearCanvas: MouseEventHandler<HTMLButtonElement>;
}

const Delete: FC<IProps> = ({ clearCanvas }) => {
  return (
    <button className='btn' onClick={clearCanvas}>
      <Icon path={mdiDelete} size='48px' />
    </button>
  );
};

export default Delete;
