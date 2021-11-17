import React from 'react';
import { HexColorPicker } from 'react-colorful';

interface IProps {
  color: string;
  setColor: (color: string) => void;
}

const ColorPicker: React.FC<IProps> = ({ color, setColor }) => {
  return (
    <div id='color-picker' className='absolute left-full top-4 '>
      <HexColorPicker color={color} onChange={setColor} defaultValue={color} />
    </div>
  );
};

export default ColorPicker;
