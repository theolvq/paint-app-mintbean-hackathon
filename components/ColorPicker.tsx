import React, { Dispatch, SetStateAction, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { MdPalette } from 'react-icons/md';

interface IProps {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
}

const ColorPicker: React.FC<IProps> = ({ color, setColor }) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const handlebuttonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowColorPicker((prev) => !prev);
  };
  return (
    <div className='relative'>
      <button id='color-btn' className='btn' onClick={handlebuttonClick}>
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
