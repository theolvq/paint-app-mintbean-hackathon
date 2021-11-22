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
import { Listbox, Transition } from '@headlessui/react';
interface IProps {
  tool: string;
  setTool: (tool: string) => void;
}

const options = [
  {
    value: 'rectangle',
    icon: mdiRectangleOutline,
  },
  {
    value: 'circle',
    icon: mdiCircleOutline,
  },
  {
    value: 'pen',
    icon: mdiGreasePencil,
  },
];

const ToolPicker: FC<IProps> = ({ tool, setTool }) => {
  const toolIcon = (tool: string) => {
    switch (tool) {
      case 'rectangle':
        return mdiRectangleOutline;
      case 'circle':
        return mdiCircleOutline;
      case 'pen':
        return mdiGreasePencil;
      default:
        return tool;
    }
  };
  return (
    <Listbox as='div' className='relative' value={tool} onChange={setTool}>
      <Listbox.Button
        className='btn group'
        defaultValue={tool}
        name='tool'
        id='tool'
      >
        <Icon path={toolIcon(tool)} size={1.5} />
        <div className='tooltip'>
          tool
          <div className='tooltip-arrow' />
        </div>
      </Listbox.Button>
      <Transition
        enter='transition duration-100 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
      >
        <Listbox.Options className='absolute z-50 w-12 ' defaultValue={tool}>
          {options.map(({ value, icon }) => (
            <Listbox.Option key={value} value={value}>
              {({ active, selected }) => (
                <li
                  className={`${
                    active ? 'bg-gray-800' : 'bg-gray-400'
                  } flex items-center gap-1 group relative`}
                >
                  <Icon path={icon} size={1.5} />
                  {selected && <Icon path={mdiCheck} size='16px' />}
                  <div className='tooltip'>
                    {value}
                    <div className='tooltip-arrow' />
                  </div>
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};

export default ToolPicker;
