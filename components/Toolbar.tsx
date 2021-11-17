import React, { FC, useEffect, useState } from 'react';
import ColorPicker from './ColorPicker';
import Eraser from './Eraser';
import LineCapPicker from './LineCapPicker';
import StrokeWidthPicker from './StrokeWidthPicker';

interface IProps {
  color: string;
  setColor: (color: string) => void;
  strokeWidth: number;
  setStrokeWidth: (strokeWidth: number) => void;
  lineCap: CanvasLineCap;
  setLineCap: (lineCap: CanvasLineCap) => void;
}

const Toolbar: FC<IProps> = ({
  color,
  setColor,
  strokeWidth,
  setStrokeWidth,
  lineCap,
  setLineCap,
}) => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // if (!showColorPicker) return;
      setShowColorPicker(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='self-start flex flex-col'>
      <div className='relative'>
        <button onClick={() => setShowColorPicker(!showColorPicker)}>
          Color Picker
        </button>
        {showColorPicker && <ColorPicker color={color} setColor={setColor} />}
      </div>
      <LineCapPicker lineCap={lineCap} setLineCap={setLineCap} />
      <StrokeWidthPicker
        strokeWidth={strokeWidth}
        setStrokeWidth={setStrokeWidth}
      />
      <Eraser setColor={setColor} />
    </div>
  );
};

export default Toolbar;
