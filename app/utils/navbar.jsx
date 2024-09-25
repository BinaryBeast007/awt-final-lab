import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/telemedicine-logo.png"
            alt="Logo"
            className="h-8 w-8 mr-2"
          />
          <span className="text-white text-lg font-semibold">Telemedicine</span>
        </div>

        <div className="space-x-4">
          <a href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">
            Home
          </a>
          <a href="/signup" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">
            Form
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
