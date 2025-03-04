import * as SwitchPrimitive from '@radix-ui/react-switch';
import { clsx } from 'clsx';
import React from 'react';

type SwitchProps = {
  isToggled: boolean;
  handleFrequencyChange: () => void;
};

const Switch: React.FC<SwitchProps> = ({
  isToggled,
  handleFrequencyChange,
}) => {
  return (
    <SwitchPrimitive.Root
      checked={isToggled}
      onCheckedChange={handleFrequencyChange}
      className={`
            group 
            ${isToggled ? 'bg-green-600' : 'bg-red-600'}
            radix-state-unchecked:bg-gray-200 dark:radix-state-unchecked:bg-gray-800
            relative inline-flex h-[24px] w-[44px] flex-shrink-0 cursor-pointer
            rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out
            focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75
          `}
    >
      <SwitchPrimitive.Thumb
        className="
        group-radix-state-checked:translate-x-5
        group-radix-state-unchecked:translate-x-0
        pointer-events-none inline-block h-[20px] w-[20px] transform
        rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out
      "
      />
    </SwitchPrimitive.Root>
  );
};

export { Switch };
