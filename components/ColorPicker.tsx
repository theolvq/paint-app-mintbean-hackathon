import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { MdPalette } from 'react-icons/md';

interface IProps {
  color: string;
  setColor: (color: string) => void;
}

const ColorPicker: React.FC<IProps> = ({ color, setColor }) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const handlebuttonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowColorPicker((prev) => !prev);
  };
  return (
    <div className='relative '>
      <button
        id='color-btn'
        className='flex justify-center items-center  w-12 h-12 text-4xl bg-gray-800 hover:bg-gray-600'
        onClick={handlebuttonClick}
      >
        <MdPalette />
      </button>
      {showColorPicker && (
        <div
          id='color-picker'
          className='absolute left-full top-4 z-50 bg-gray-300 '
        >
          <HexColorPicker
            color={color}
            onChange={setColor}
            defaultValue={color}
          />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
