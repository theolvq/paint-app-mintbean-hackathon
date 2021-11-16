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
  const cursorWidth = strokeWidth * 1.25;
  return (
    <div
      className={`cursor ${cursorHidden ? 'hidden' : 'block'}`}
      style={{
        width: cursorWidth,
        height: cursorWidth,
        border: `1px solid ${color}`,
        left: cursorPosition.x - cursorWidth,
        top: cursorPosition.y - cursorWidth,
      }}
    />
  );
};

export default Cursor;
