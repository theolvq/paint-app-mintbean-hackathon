import React, { FC, useMemo } from 'react';

interface IProps {
  setStrokeWidth: (strokeWidth: number) => void;
}

const StrokeWidthPicker: FC<IProps> = ({ setStrokeWidth }) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setStrokeWidth(Number(value));
  };

  const options = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => i + 1);
  }, []);

  return (
    <select name='strokeWidth' id='strokeWidth' onChange={handleSelectChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default StrokeWidthPicker;
