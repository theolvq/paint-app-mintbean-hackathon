import React from 'react';
import { HexColorPicker } from 'react-colorful';

interface IProps {
  color: string;
  setColor: (color: string) => void;
}

const ColorPicker: React.FC<IProps> = ({ color, setColor }) => {
  return <HexColorPicker color={color} onChange={setColor} />;
};

export default ColorPicker;
