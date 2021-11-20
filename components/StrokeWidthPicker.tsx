import React, { Dispatch, FC, SetStateAction, useMemo, useState } from 'react';
import { MdLineWeight } from 'react-icons/md';

interface IProps {
  strokeWidth: number;
  setStrokeWidth: Dispatch<SetStateAction<number>>;
}

const StrokeWidthPicker: FC<IProps> = ({ strokeWidth, setStrokeWidth }) => {
  const [showPicker, setShowPicker] = useState(false);

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
    <div className='relative'>
      {' '}
      <button className='btn' onClick={() => setShowPicker(!showPicker)}>
        {' '}
        <MdLineWeight />{' '}
      </button>
      {showPicker && (
        <select
          className='bg-gray-600 absolute left-full top-4'
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
      )}
    </div>
  );
};

export default StrokeWidthPicker;
