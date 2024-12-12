import clsx from 'clsx';
import React from 'react';

interface Props {
  isOpen: boolean;
  handleIsOpen: () => void;
  className?: string;
}

const BurgerIcon: React.FC<Props> = ({ isOpen, handleIsOpen, className }) => {
  return (
    <div onClick={handleIsOpen} className={clsx('relative h-7 w-10 hover:cursor-pointer', className)}>
      <span
        className={clsx(
          'absolute left-0 h-1 rounded-sm bg-accent transition-all',
          isOpen ? 'top-1/2 w-full -translate-y-1/2 rotate-45 duration-500' : 'top-0 w-2/3 duration-200'
        )}
      />
      <span
        className={clsx(
          'absolute top-1/2 h-1 -translate-y-1/2 transform rounded-sm bg-accent transition-all',
          isOpen ? 'left-1/2 w-0 -translate-x-1/2 duration-200' : 'left-0 w-full duration-500'
        )}
      />
      <span
        className={clsx(
          'absolute right-0 h-1 rounded-sm bg-accent transition-all',
          isOpen ? 'bottom-1/2 w-full translate-y-1/2 -rotate-[45deg] duration-500' : 'bottom-0 w-2/3 duration-200'
        )}
      />
    </div>
  );
};

export default BurgerIcon;
