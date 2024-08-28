import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Header from './Header';
import TextEditor from './TextEditor';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EmailsPage() {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [showReplyForm, setShowReplyForm] = useState(false);

  useEffect(() => {
    axios.get('/emails.json')
      .then(response => {
        setEmails(response.data);
        if (response.data.length > 0) {
          setSelectedEmail(response.data[0]); // Select the first email by default
        }
      })
      .catch(error => {
        console.error("There was an error fetching the emails!", error);
      });
  }, []);

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
  };

  const handleReplyClick = () => {
    setShowReplyForm(!showReplyForm); // Toggle reply form visibility
  };

  const handleReplySubmit = (event) => {
    event.preventDefault();
    // Add your reply submission logic here

    // Show success toast notification
    toast.success('Reply sent successfully!');
    setShowReplyForm(false);
  };

  return (
    <>
      <Header />
      <div className="flex flex-row min-h-screen bg-gray-900 text-white">
        <Sidebar />
        {/* Inbox Section */}
        <div className="flex flex-col w-1/4 border-r border-gray-700 p-4 ml-20 mt-20">
          <h2 className="text-lg font-semibold mb-4">All Inbox(s)</h2>
          <div className="space-y-2 overflow-y-auto h-fit">
            {emails.map((email, index) => (
              <div
                key={index}
                className={`p-2 cursor-pointer rounded-lg ${selectedEmail === email ? 'bg-gray-700' : 'bg-gray-800 hover:bg-gray-700'}`}
                onClick={() => handleEmailClick(email)}
              >
                <p className="text-sm font-medium">{email.toName}</p>
                <p className="text-xs text-gray-400">{email.subject}</p>
                <p className="text-xs text-gray-500">{email.body.slice(0, 30)}...</p>
              </div>
            ))}
          </div>
        </div>
        {/* Email Details Section */}
        <div className="flex flex-col w-2/4 p-4 mt-20">
          {selectedEmail ? (
            <>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{selectedEmail.subject}</h3>
                <p className="text-gray-400 mb-1">from : {selectedEmail.from}</p>
                <p className="text-gray-400 mb-1">to : {selectedEmail.to}</p>
                <div className="bg-gray-900 p-4 rounded-lg mt-4">
                  <p>{selectedEmail.body}</p>
                </div>
              </div>
            </>
          ) : (
            <p className="text-gray-500">Select an email to view details</p>
          )}
          <button type="button" onClick={handleReplyClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm justify-center px-5 mt-8 py-2.5 w-1/6 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Reply
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>

          {/* Display the TextEditor for replying if showReplyForm is true */}
          {showReplyForm && (
            <TextEditor onSubmit={handleReplySubmit} />
          )}
        </div>
        {/* Lead Details and Activities Section */}
        <div className="flex flex-col w-1/4 p-4 mt-20 bg-gray-800 text-white border-l border-gray-700 h-vh">
          <div className="mb-8 p-4 rounded-lg bg-gray-900 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">Lead Details</h3>
            <p className="text-sm mb-2"><strong>Name:</strong> Aditya</p>
            <p className="text-sm mb-2"><strong>Contact No:</strong>+91-7369041025</p>
            <p className="text-sm mb-2"><strong>Email ID:</strong> hiitsaditya7369@gmail.com</p>
            <p className="text-sm mb-2"><strong>LinkedIn:</strong> <a href="#" className="text-blue-500">https://www.linkedin.com/in/aditya-raj712/</a></p>
            <p className="text-sm mb-2"><strong>Company Name:</strong> Reachinbox</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-900 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">Activities</h3>
            <p className="text-sm mb-2"><strong>Campaign Name:</strong> 3 Steps | 5 Days in Sequence</p>
            <div className="flex flex-col space-y-2 mt-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex justify-center items-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z"></path><path d="M16 2v2M8 2v2M3 10h18"></path></svg>
                </div>
                <p className="text-sm ml-4">Step 1: Email Sent 3rd, Aug</p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex justify-center items-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z"></path><path d="M16 2v2M8 2v2M3 10h18"></path></svg>
                </div>
                <p className="text-sm ml-4">Step 2: Email Opened 5th, July</p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex justify-center items-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z"></path><path d="M16 2v2M8 2v2M3 10h18"></path></svg>
                </div>
                <p className="text-sm ml-4">Step 3: Email Opened 5th, Aug</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default EmailsPage;
