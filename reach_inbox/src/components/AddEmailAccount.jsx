import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function AddEmailAccount() {
  return (
    <section className="flex flex-col self-center mt-36 mr-16 max-w-full w-[956px] max-md:mt-10 max-md:mr-2.5 min-h-screen">
      <div className="flex flex-col justify-center items-center px-20 py-9 max-w-full rounded-lg border border-solid dark:bg-neutral-900 bg-gray-400 border-neutral-600 text-black dark:text-slate-50 w-[576px] max-md:px-5">
        <div className="flex flex-col ml-3 max-w-full w-[298px]">
          <div className="flex flex-col items-center justify-center pr-14 pl-7 text-xl leading-snug max-md:px-5">
          <FontAwesomeIcon icon={faEnvelope} size="2xl" />
            <h2 className="mt-8">👋 Add Email Account</h2>
          </div>
          <p className="mt-4 text-xs leading-none text-center text-black dark:text-slate-400">
            Start adding your email accounts to start your campaign
          </p>
          <button type="button" className="text-white mt-5 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">+ Add New Mailbox</button>
        </div>
      </div>
      <div className="self-end mt-16 text-xs leading-none text-white max-md:mt-10">
        1
      </div>
    </section>
  );
}

export default AddEmailAccount;