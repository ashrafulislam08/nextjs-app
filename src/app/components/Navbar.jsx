import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white px-2 py-3">
      <ul className="flex items-center gap-5">
        <li className="cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/services">Services</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/about">About</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/posts">Posts</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/meals">Meals</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
