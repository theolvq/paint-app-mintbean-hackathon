import React, { FC, useState } from 'react';
import Icon from '@mdi/react';
import {
  mdiShapePlus,
  mdiRectangle,
  mdiRectangleOutline,
  mdiCircle,
  mdiCircleOutline,
  mdiGreasePencil,
  mdiCheck,
} from '@mdi/js';
import { Listbox } from '@headlessui/react';
interface IProps {
  tool: string;
  setTool: (tool: string) => void;
}

const options = [
  {
    value: 'rectagnle',
    icon: mdiRectangleOutline,
  },
  {
    value: 'circle',
    icon: mdiCircleOutline,
  },
  {
    value: 'pencil',
    icon: mdiGreasePencil,
  },
];

const ToolPicker: FC<IProps> = ({ tool, setTool }) => {
  const toolIcon = (tool: string) => {
    switch (tool) {
      case 'rectagnle':
        return mdiRectangleOutline;
      case 'circle':
        return mdiCircleOutline;
      case 'pencil':
        return mdiGreasePencil;
      default:
        return tool;
    }
  };
  return (
    <Listbox as='div' className='relative' value={tool} onChange={setTool}>
      <Listbox.Button
        className='btn'
        defaultValue={tool}
        name='strokeWidth'
        id='strokeWidth'
      >
        <Icon path={toolIcon(tool)} />
      </Listbox.Button>
      <Listbox.Options className='absolute z-50 w-12' defaultValue={tool}>
        {options.map(({ value, icon }) => (
          <Listbox.Option key={value} value={value}>
            {({ active, selected }) => (
              <li
                className={`${
                  active ? 'bg-gray-800' : 'bg-gray-400'
                } flex items-center gap-1`}
              >
                <Icon path={icon} size='24px' />
                {selected && <Icon path={mdiCheck} size='16px' />}
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default ToolPicker;
