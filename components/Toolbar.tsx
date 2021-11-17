import React, { FC, useEffect, useState } from 'react';
import ColorPicker from './ColorPicker';
import Eraser from './Eraser';
import StrokeWidthPicker from './StrokeWidthPicker';

interface IProps {
  color: string;
  setColor: (color: string) => void;
  strokeWidth: number;
  setStrokeWidth: (strokeWidth: number) => void;
}

const Toolbar: FC<IProps> = ({
  color,
  setColor,
  strokeWidth,
  setStrokeWidth,
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
      <StrokeWidthPicker
        strokeWidth={strokeWidth}
        setStrokeWidth={setStrokeWidth}
      />
      <Eraser setColor={setColor} />
    </div>
  );
};

export default Toolbar;
