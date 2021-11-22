import React, { FC } from 'react';
import { PositionArgs } from '../types';

interface IProps {
  cursorPosition: PositionArgs;
  cursorHidden: boolean;
  strokeWidth: number;
  strokeColor: string;
  tool: string;
}

const Cursor: FC<IProps> = ({
  cursorPosition,
  cursorHidden,
  strokeWidth,
  strokeColor,
  tool,
}) => {
  const cursorRadius = strokeWidth;
  const cursorVisibility = cursorHidden ? 'invisible' : 'visible';
  const generalStyle = {
    width: cursorRadius,
    height: cursorRadius,
    color: strokeColor,
    border: `${
      tool.includes('rectangle') || tool.includes('circle')
        ? 'none'
        : `1px solid ${strokeColor}`
    } `,
    left: cursorPosition.x! - cursorRadius / 2,
    top: cursorPosition.y! - cursorRadius / 2,
  };

  if (tool === 'pen') {
    return (
      <div
        className={`cursor rounded-full ${cursorVisibility}`}
        style={generalStyle}
      />
    );
  }
  if (tool.includes('rectangle') || tool.includes('circle')) {
    return (
      <div
        className={`cursor  flex justify-center items-center text-6xl font-light border-0 ${cursorVisibility}`}
        style={generalStyle}
      >
        {' '}
        +{' '}
      </div>
    );
  }

  if (tool === 'eraser') {
    return (
      <div className={`cursor  ${cursorVisibility}`} style={generalStyle}></div>
    );
  }
  return null;
};

export default Cursor;
