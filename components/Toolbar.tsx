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

  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     if (e?.target?.id === 'color-btn') return;
  //     setShowColorPicker(false);
  //   };
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  const handlebuttonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowColorPicker((prev) => !prev);
  };

  return (
    <div className='self-start flex flex-col'>
      <div className='relative'>
        <button id='color-btn' onClick={handlebuttonClick}>
          Color Picker
        </button>
        {showColorPicker && <ColorPicker color={color} setColor={setColor} />}
      </div>
      <LineCapPicker lineCap={lineCap} setLineCap={setLineCap} />
      <StrokeWidthPicker
        strokeWidth={strokeWidth}
        setStrokeWidth={setStrokeWidth}
      />
      <Eraser
        setColor={setColor}
        lineCap={lineCap}
        setLineCap={setLineCap}
        color={color}
      />
      <button>Clear</button>
    </div>
  );
};

export default Toolbar;
