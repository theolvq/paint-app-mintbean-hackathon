import React, {
  Dispatch,
  FC,
  FormEventHandler,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import { mdiChevronDown, mdiFormatLineWeight, mdiCheck } from '@mdi/js';
import Icon from '@mdi/react';
import { Listbox, Transition } from '@headlessui/react';

interface IProps {
  strokeWidth: number;
  setStrokeWidth: Dispatch<SetStateAction<number>>;
}

const StrokeWidthPicker: FC<IProps> = ({ strokeWidth, setStrokeWidth }) => {
  const [showPicker, setShowPicker] = useState(false);

  const options = useMemo(() => {
    return Array.from({ length: 30 }, (n, i) => i * 4).filter((el, i) => {
      if ((i !== 0 && i <= 13) || (i > 13 && i % 2 === 0)) {
        return true;
      }
      return false;
    });
  }, []);

  return (
    <Listbox
      as='div'
      className='group relative'
      value={strokeWidth}
      onChange={setStrokeWidth}
    >
      <Listbox.Button
        className='btn'
        defaultValue={strokeWidth}
        name='strokeWidth'
        id='strokeWidth'
      >
        <Icon path={mdiFormatLineWeight} />
        <div className='text-sm'>{strokeWidth}</div>
      </Listbox.Button>
      <Transition
        enter='transition duration-100 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
      >
        <Listbox.Options className='absolute z-50 w-12'>
          {options.map((option) => (
            <Listbox.Option key={option} value={option}>
              {({ active, selected }) => (
                <li
                  className={`${
                    active ? 'bg-gray-800' : 'bg-gray-400'
                  } flex items-center gap-1`}
                >
                  {option}
                  {selected && <Icon path={mdiCheck} size='16px' />}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
      <div className='tooltip'>
        stroke width
        <div className='tooltip-arrow' />
      </div>
    </Listbox>
  );
};

export default StrokeWidthPicker;
