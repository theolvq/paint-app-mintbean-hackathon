import React, { useState, useEffect, FC } from 'react';

interface IProps {
  cursorPosition: PositionArgs;
  cursorHidden: boolean;
  strokeWidth: number;
  color: string;
  lineCap: CanvasLineCap;
}

interface PositionArgs {
  x: number | null;
  y: number | null;
}

const Cursor: FC<IProps> = ({
  cursorPosition,
  cursorHidden,
  strokeWidth,
  color,
  lineCap,
}) => {
  const cursorRadius = strokeWidth;
  const cursorLineCap = lineCap === 'round' ? 'rounded-full' : 'rounded-none';
  const cursorVisibility = cursorHidden ? 'invisible' : 'visible';
  const isEraser = color !== '#ffffff';

  return (
    <div
      className={`cursor ${cursorLineCap} ${cursorVisibility}`}
      style={{
        width: cursorRadius,
        height: cursorRadius,
        border: `1px solid ${isEraser ? color : '#c5c5c5'}`,
        backgroundColor: isEraser ? '#11ffee00' : '#c5c5c5',
        left: cursorPosition.x! - cursorRadius / 2,
        top: cursorPosition.y! - cursorRadius / 2,
      }}
    />
  );
};

export default Cursor;
