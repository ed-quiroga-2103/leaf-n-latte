'use client';

import { Transition } from '@headlessui/react';
import { useState } from 'react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-surface-2 flex items-center justify-between p-4 shadow-md">
      <h1 className="text-xl font-bold">Leaf & Latte</h1>

      {/* Hamburger Button for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleDrawer} className="p-2 focus:outline-none">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Drawer with Animation */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in duration-200 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="bg-surface-2 absolute top-0 left-0 z-10 h-screen w-full p-4">
          <button onClick={toggleDrawer} className="mb-4 p-2">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {/* Add drawer menu items here */}
        </div>
      </Transition>

      {/* Desktop Items - Hidden on Mobile */}
      <div className="hidden items-center lg:flex">{/* Previous contents of div here */}</div>
    </nav>
  );
};
