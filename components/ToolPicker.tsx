import React, { FC } from 'react';

interface IProps {
  tool: string;
  setTool: (tool: string) => void;
}

const ToolPicker: FC<IProps> = ({ tool, setTool }) => {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget;
    setTool(value);
  };
  return (
    <select className='bg-gray-600' onChange={handleSelect} defaultValue={tool}>
      <option value='rectangle'>rectangle</option>
      <option value='pen'>pen</option>
      <option value='circle'>circle</option>
    </select>
  );
};

export default ToolPicker;
