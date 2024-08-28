import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faCog, faPaperPlane, faQuestionCircle, faComments } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();

  const sidebarItems = [
    { icon: faEnvelope, text: 'Email', route: '/emails' }, // Added route for EmailsPage
    { icon: faUser, text: 'Profile', route: '/profile' },
    { icon: faPaperPlane, text: 'Telegram', route: '/telegram' },
    { icon: faQuestionCircle, text: 'Help', route: '/help' },
    { icon: faComments, text: 'Chat', route: '/chat' },
    { icon: faCog, text: 'Settings', route: '/settings' }
  ];

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <nav className="self-stretch fixed left-0 top-16 flex flex-col items-center border-b border-blue-600 px-4 pt-0 pb-5 w-20 text-base text-center text-white min-h-screen whitespace-nowrap bg-gray-200 dark:bg-neutral-900 max-md:pt-0">
      {sidebarItems.map((item, index) => (
        <div
          key={index}
          className="group flex flex-col items-center py-4 mt-2 cursor-pointer text-black dark:text-gray-300"
          onClick={() => handleNavigation(item.route)} // Added onClick to handle navigation
        >
          <FontAwesomeIcon icon={item.icon} size="lg" />
          <span className="mt-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {item.text}
          </span>
        </div>
      ))}
    </nav>
  );
}

export default Sidebar;
