import React from 'react';

const Header = () => {
  return (
    <nav className="flex justify-betwee p-4 bg-gradient-to-br from-black via-slate-900 to-black text-white shadow-md">
      

      <ul className="flex flex-wrap  gap-4 text-sm md:text-base px-100">
        <li>
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
        </li>
        <li>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
        </li>
        <li>
          <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
