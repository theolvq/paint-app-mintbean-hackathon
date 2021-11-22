import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import Icon from '@mdi/react';
import { mdiPalette } from '@mdi/js';
import { Menu, Transition } from '@headlessui/react';

interface IProps {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
}

const ColorPicker: FC<IProps> = ({ color, setColor }) => {
  return (
    <Menu as='div' className='relative'>
      {({ open }) => (
        <>
          {' '}
          <Menu.Button className={`btn ${!open && 'group'}`}>
            <Icon path={mdiPalette} size={1.5} />
            <div className='tooltip'>
              color
              <div className='tooltip-arrow' />
            </div>
          </Menu.Button>
          <Transition
            enter='transition duration-100 ease-out'
            enterFrom='transform scale-95 opacity-0'
            enterTo='transform scale-100 opacity-100'
            leave='transition duration-75 ease-out'
            leaveFrom='transform scale-100 opacity-100'
            leaveTo='transform scale-95 opacity-0'
          >
            <Menu.Items>
              <Menu.Item
                as='div'
                className='absolute left-full top-0 z-50 ml-2'
              >
                <HexColorPicker
                  color={color}
                  onChange={setColor}
                  defaultValue={color}
                />
              </Menu.Item>
            </Menu.Items>
          </Transition>{' '}
        </>
      )}
    </Menu>
  );
};

export default ColorPicker;
