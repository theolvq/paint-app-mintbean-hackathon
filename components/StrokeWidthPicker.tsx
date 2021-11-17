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
    return Array.from({ length: 30 }, (n, i) => i * 4).filter((el, i) => {
      if ((i !== 0 && i <= 13) || (i > 13 && i % 2 === 0)) {
        return true;
      }
      return false;
    });
  }, []);

  return (
    <select
      className='bg-gray-600 w-'
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
