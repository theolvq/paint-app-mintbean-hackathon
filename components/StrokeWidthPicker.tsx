import React, { FC, useMemo } from 'react';

interface IProps {
  strokeWidth: number;
  setStrokeWidth: (strokeWidth: number) => void;
}

const StrokeWidthPicker: FC<IProps> = ({ strokeWidth, setStrokeWidth }) => {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setStrokeWidth(Number(value));
  };

  const options = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => i * 2);
  }, []);

  return (
    <select
      className='bg-gray-600'
      defaultValue={strokeWidth}
      name='strokeWidth'
      id='strokeWidth'
      onChange={handleSelect}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default StrokeWidthPicker;
