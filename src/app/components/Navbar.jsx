import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white px-2 py-3">
      <ul className="flex items-center gap-5">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
