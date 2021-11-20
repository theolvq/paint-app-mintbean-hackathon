import React, { FC, useState } from 'react';
import Icon from '@mdi/react';
import { mdiShapePlus } from '@mdi/js';
interface IProps {
  tool: string;
  setTool: (tool: string) => void;
}

const ToolPicker: FC<IProps> = ({ tool, setTool }) => {
  const [showToolPicker, setShowToolPicker] = useState(false);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget;
    setTool(value);
  };
  return (
    <div>
      <button
        className='btn'
        onClick={() => setShowToolPicker(!showToolPicker)}
      >
        {' '}
        <Icon path={mdiShapePlus} size='48px' />
      </button>
      {showToolPicker && (
        <select
          className='bg-gray-600 absolute left-full z-50'
          onChange={handleSelect}
          defaultValue={tool}
        >
          <option value='rectangle'>rectangle</option>
          <option value='pen'>pen</option>
          <option value='circle'>circle</option>
        </select>
      )}
    </div>
  );
};

export default ToolPicker;
