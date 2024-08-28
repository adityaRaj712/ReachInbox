import React from 'react';
import logo from '../assets/logo.svg'
import ThemeToggle from './ThemeToggle';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === 'logout') {
      navigate('/');
    }
    // You can add other logic here if needed
  };

  return (
    <header className="flex flex-wrap gap-5 fixed top-0 left-0 right-0 justify-between border-b border-green-200 py-5 pr-9 pl-20 w-full text-neutral-900 bg-slate-50 dark:bg-neutral-900  dark:text-slate-50 max-md:px-5 max-md:max-w-full">
    <div className="flex flex-row">
      <img src={logo}></img>
      <div className='text-2xl ml-2 mt-2 font-bold'>REACHINBOX</div>
    </div>
    <div className="flex gap-10 py-2.5 pr-3.5 pl-7 mr-8 my-auto text-sm leading-none text-center rounded-md border border-solid bg-purple-400 dark:bg-purple-700 border-neutral-700 max-md:pl-5">
      <select className="dark:bg-purple-700 bg-purple-400  text-black dark:text-white font-medium border-none outline-none" onChange={handleSelectChange}>
        <option className='font-medium' value="">My Workspace</option>
        <option className='font-medium' value="Profile">Profile</option>
        <option className='font-medium' value="logout">Log out</option>
      </select>
      <ThemeToggle/>
    </div>
  </header>
  
  );
}

export default Header;