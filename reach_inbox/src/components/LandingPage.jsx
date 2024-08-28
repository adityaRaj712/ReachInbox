// src/LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header2 from './Header2';
import ThemeToggle from './ThemeToggle';

function LandingPage({ onLogin }) {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/login');
  };

  return (
    <div className='dark:bg-neutral-900 bg-white min-h-screen'>
      <Header2 />
      <div className='flex flex-col items-center justify-center mt-24'>
        <span className='text-5xl dark:text-white text-black font-bold'>Land Emails in Inboxes, Not Spam!</span>
        <span className='text-5xl dark:text-white text-black font-bold'>
          10X <span className='text-5xl text-blue-700 font-bold'>Your Sales Pipeline!</span>
        </span>
        <span className='text-xl text-gray-400 text-wrap inline-flex text-center max-w-2xl mt-6'>
          Maximize your outreach potential with ReachInbox's unlimited email accounts, AI-driven Prospecting, and multi-channel capabilities. 10x your leads, meetings and deals
        </span>
        <button
          type="button"
          onClick={handleGetStartedClick}
          className="text-white mt-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Get Started Now
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
