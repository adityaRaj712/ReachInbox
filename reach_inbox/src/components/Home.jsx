import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import AddEmailAccount from './AddEmailAccount';
import ThemeToggle from './ThemeToggle';

function Home() {
  return (
    <>
      <Header />
      <div className='flex min-h-screen gap-x-96 dark:bg-gray-800 bg-gray-100'>
        <Sidebar />
        {/* Main content area */}
        <div className='flex-1 flex  justify-center items-center bg-gray-100 dark:bg-gray-800 '>
          {/* Centered content */}
          <AddEmailAccount />
        </div>
      </div>
    </>
  );
}

export default Home;
