import React, { FC } from 'react';

interface IProps {
  cursorPosition: PositionArgs;
  cursorHidden: boolean;
  strokeWidth: number;
  strokeColor: string;
  tool: string;
}

interface PositionArgs {
  x: number | null;
  y: number | null;
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
    border: `${tool !== 'rectangle' ? `1px solid ${strokeColor}` : 'none'} `,
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
  if (tool === 'rectangle') {
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
  if (tool === 'circle') {
    return (
      <div className={`cursor  ${cursorVisibility}`} style={generalStyle}></div>
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
