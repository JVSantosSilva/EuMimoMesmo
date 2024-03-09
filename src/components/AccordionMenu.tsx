import React, { useState } from 'react';

const AccordionMenu: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <div
        className="text-xl cursor-pointer"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        Laços
      </div>
      {isExpanded && (
        <div className="absolute z-10 mt-2 p-2 bg-white shadow-lg">
          <ul>
            <li className="py-1">Opção 1</li>
            <li className="py-1">Opção 2</li>
            <li className="py-1">Opção 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccordionMenu;
