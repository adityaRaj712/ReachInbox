// src/components/ThemeToggle.jsx
import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => 
    document.documentElement.classList.contains('dark')
  );

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const isDark = savedTheme === 'dark';
      document.documentElement.classList.toggle('dark', isDark);
      setIsDarkMode(isDark);
    }
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center absolute top-4 right-4 justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full shadow-md"
    >
      {isDarkMode ? (
        <span className="text-gray-900 dark:text-gray-200">🌞</span>
      ) : (
        <span className="text-gray-900 dark:text-gray-200">🌜</span>
      )}
    </button>
  );
};

export default ThemeToggle;
