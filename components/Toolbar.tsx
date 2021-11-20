import React, { FC, useEffect, useState } from 'react';
import ColorPicker from './ColorPicker';
import Eraser from './Eraser';
import LineCapPicker from './LineCapPicker';
import ToolPicker from './ToolPicker';
import StrokeWidthPicker from './StrokeWidthPicker';

interface IProps {
  strokeColor: string;
  setStrokeColor: (strokeColor: string) => void;
  strokeWidth: number;
  setStrokeWidth: (strokeWidth: number) => void;
  lineCap: CanvasLineCap;
  setLineCap: (lineCap: CanvasLineCap) => void;
  tool: string;
  setTool: (tool: string) => void;
}

const Toolbar: FC<IProps> = ({
  strokeColor,
  setStrokeColor,
  strokeWidth,
  setStrokeWidth,
  lineCap,
  setLineCap,
  tool,
  setTool,
}) => {
  return (
    <div className='self-start flex flex-col'>
      <ColorPicker color={strokeColor} setColor={setStrokeColor} />
      <StrokeWidthPicker
        strokeWidth={strokeWidth}
        setStrokeWidth={setStrokeWidth}
      />
      <Eraser
        setColor={setStrokeColor}
        lineCap={lineCap}
        setLineCap={setLineCap}
        color={strokeColor}
      />
      <button>Clear</button>
      <ToolPicker tool={tool} setTool={setTool} />
    </div>
  );
};

export default Toolbar;
