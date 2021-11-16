import React, { useState, useEffect, FC } from 'react';

interface IProps {
  cursorPosition: { x: number; y: number };
  cursorHidden: boolean;
  strokeWidth: number;
  color: string;
}

const Cursor: FC<IProps> = ({
  cursorPosition,
  cursorHidden,
  strokeWidth,
  color,
}) => {
  const cursorRadius = strokeWidth * 1.5;
  return (
    <div
      className={`cursor ${cursorHidden ? 'hidden' : 'block'}`}
      style={{
        width: cursorRadius,
        height: cursorRadius,
        border: `1px solid ${color !== '#fff' ? color : '#000'}`,
        left: cursorPosition.x - cursorRadius / 2,
        top: cursorPosition.y - cursorRadius / 2,
      }}
    />
  );
};

export default Cursor;
