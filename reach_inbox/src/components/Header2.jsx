// src/components/Header2.jsx
import React from 'react';
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle'; // Import the ThemeToggle component

function Header2() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/login');
  };

  return (
    <header className="flex justify-between border-b border-green-200 items-center py-4 px-8 w-full text-neutral-900 bg-slate-50 dark:bg-neutral-900  dark:text-slate-50">
      {/* Left side: Logo and Title */}
      <div className="flex items-center">
        <img src={logo} alt="ReachInbox Logo" className="w-8 h-8" />
        <div className="text-2xl ml-2 text-black dark:text-white font-bold">REACHINBOX</div>
      </div>
      
      {/* Center: Navigation Links */}
      <nav className="flex space-x-14 text-gray-300">
        <a href="#" className="dark:text-white text-black">Features</a>
        <a href="#" className="dark:text-white text-black">Pricing</a>
        <a href="#" className="dark:text-white text-black">FAQs</a>
        <a href="#" className="dark:text-white text-black">Zapmail</a>
      </nav>
      
      {/* Right side: Login Button and Theme Toggle */}
      <div className="flex items-center space-x-4 mr-10">
        <ThemeToggle /> {/* Add the ThemeToggle component */}
        <button 
          type="button" 
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5" onClick={handleGetStartedClick}
        >
          Log In
        </button>
      </div>
    </header>
  );
}

export default Header2;
