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
      className='relative z-50'
      value={strokeWidth}
      onChange={setStrokeWidth}
    >
      <Listbox.Button
        className='group btn'
        defaultValue={strokeWidth}
        name='strokeWidth'
      >
        <Icon path={mdiFormatLineWeight} size={1.5} />
        <div className='text-sm'>{strokeWidth}px</div>
        <div className='tooltip'>
          stroke width
          <div className='tooltip-arrow' />
        </div>
      </Listbox.Button>
      <Transition
        enter='transition-opacity duration-300 ease-out'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-300 ease-out'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <Listbox.Options className='absolute t-0 z-50 w-12'>
          {options.map((option) => (
            <Listbox.Option key={option} value={option}>
              {({ active, selected }) => (
                <div
                  className={`${
                    active ? 'bg-gray-800' : 'bg-gray-600'
                  } flex items-center gap-1 px-1`}
                >
                  {option}
                  {selected && <Icon path={mdiCheck} size='16px' />}
                </div>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};

export default StrokeWidthPicker;
