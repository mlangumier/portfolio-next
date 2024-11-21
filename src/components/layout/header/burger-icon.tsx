import clsx from 'clsx';
import React from 'react';

interface Props {
  isOpen: boolean;
  btnLabel: string;
  handleIsOpen: () => void;
}

const BurgerIcon: React.FC<Props> = ({ isOpen, btnLabel, handleIsOpen }) => {
  return (
    <button aria-label={btnLabel} onClick={handleIsOpen} className="relative h-10 w-12 hover:cursor-pointer">
      <span
        className={clsx(
          'absolute left-0 top-0 h-1 w-1/2 transform rounded-sm bg-primary transition duration-500 ease-in-out',
          isOpen && 'translate-x-[4px] translate-y-[10px] rotate-45'
        )}
      />
      <span
        className={clsx(
          'absolute right-0 top-1/2 h-1 w-12 -translate-y-1/2 transform rounded-sm bg-primary transition duration-500 ease-in-out',
          isOpen && '-rotate-45'
        )}
      />
      <span
        className={clsx(
          'absolute bottom-0 right-0 h-1 w-1/2 transform rounded-sm bg-primary transition duration-500 ease-in-out',
          isOpen && '-translate-x-[4px] -translate-y-[10px] rotate-45'
        )}
      />
    </button>
  );
};

export default BurgerIcon;
