import React, { FC } from 'react';

interface IProps {
  shape: string;
  setShape: (shape: string) => void;
}

const ShapePicker: FC<IProps> = ({ shape, setShape }) => {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget;
    setShape(value);
  };
  return (
    <select className='bg-gray-600' onChange={handleSelect}>
      <option value='rectangle'>rectangle</option>
      <option value='line'>line</option>
      <option value='circle'>circle</option>
    </select>
  );
};

export default ShapePicker;
