import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons'; // Correct import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-base-100 shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
         
          <div className="flex">
            <a className="btn btn-ghost text-xl">CS — Ticket System</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <a className="btn btn-ghost">Home</a>
            <a className="btn btn-ghost">FAQ</a>
            <a className="btn btn-ghost">Changelog</a>
            <a className="btn btn-ghost">Blog</a>
            <a className="btn btn-ghost">Download</a>
            <a className="btn btn-ghost">Contact</a>
            <button className="btn btn-soft btn-primary">
                 + New Ticke</button>
                
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="btn btn-square btn-ghost"
            >
              <FontAwesomeIcon icon={faBars}/> {/* Hamburger icon */}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-2 pt-2 pb-3 space-y-1 bg-base-100 shadow-md">
          <a className="block btn btn-ghost w-full text-left">Home</a>
          <a className="block btn btn-ghost w-full text-left">FAQ</a>
          <a className="block btn btn-ghost w-full text-left">Changelog</a>
          <a className="block btn btn-ghost w-full text-left">Blog</a>
          <a className="block btn btn-ghost w-full text-left">Download</a>
          <a className="block btn btn-ghost w-full text-left">Contact</a>
         <button className="btn btn-primary">+ New Ticket</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
