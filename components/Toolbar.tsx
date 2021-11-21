import React, { Dispatch, FC, MouseEventHandler, SetStateAction } from 'react';
import ColorPicker from './ColorPicker';
import Eraser from './Eraser';
import ToolPicker from './ToolPicker';
import StrokeWidthPicker from './StrokeWidthPicker';
import Delete from './Delete';

interface IProps {
  strokeColor: string;
  setStrokeColor: Dispatch<SetStateAction<string>>;
  strokeWidth: number;
  setStrokeWidth: Dispatch<SetStateAction<number>>;
  tool: string;
  setTool: Dispatch<SetStateAction<string>>;
  clearCanvas: MouseEventHandler<HTMLButtonElement>;
}

const Toolbar: FC<IProps> = ({
  strokeColor,
  setStrokeColor,
  strokeWidth,
  setStrokeWidth,
  tool,
  setTool,
  clearCanvas,
}) => {
  return (
    <div className='self-start flex flex-col'>
      <ColorPicker color={strokeColor} setColor={setStrokeColor} />
      <StrokeWidthPicker
        strokeWidth={strokeWidth}
        setStrokeWidth={setStrokeWidth}
      />
      <ToolPicker tool={tool} setTool={setTool} />
      <Eraser setColor={setStrokeColor} color={strokeColor} />
      <Delete clearCanvas={clearCanvas} />
    </div>
  );
};

export default Toolbar;
