import React from 'react';
import { Button } from './ui/button';

interface AccordionMenuProps {
  label: string; 
}

const AccordionMenu: React.FC<AccordionMenuProps> = ({ label }) => {
  return (
    <div className="relative">
      <div
        className="text-xl cursor-pointer"
      >
        <Button variant="ghost" className='hover:bg-pink-50'>
          {label}
        </Button>
      </div>
    </div>
  );
};

export default AccordionMenu;
