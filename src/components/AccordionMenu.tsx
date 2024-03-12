import React from 'react';

interface AccordionMenuProps {
  label: string; 
}

const AccordionMenu: React.FC<AccordionMenuProps> = ({ label }) => {
  return (
    <div className="relative">
      <div
        className="text-xl cursor-pointer"
      >
        {label}
      </div>
    </div>
  );
};

export default AccordionMenu;
