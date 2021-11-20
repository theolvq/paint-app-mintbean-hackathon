import React, { Dispatch, FC, SetStateAction } from 'react';

interface IProps {
  lineCap: CanvasLineCap;
  setLineCap: Dispatch<SetStateAction<CanvasLineCap>>;
}

const LineCapPicker: FC<IProps> = ({ lineCap, setLineCap }) => {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget;
    setLineCap(value as CanvasLineCap);
  };
  return (
    <div>
      <select
        className='bg-gray-600'
        onChange={handleSelect}
        defaultValue={lineCap}
      >
        <option value='butt'>butt</option>
        <option value='round'>round</option>
        <option value='square'>square</option>
      </select>
    </div>
  );
};

export default LineCapPicker;
