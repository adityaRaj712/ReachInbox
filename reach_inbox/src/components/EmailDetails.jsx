import React from 'react';

const EmailDetails = ({ selectedEmail }) => {
  if (!selectedEmail) return <div className="email-details">Select an email to view</div>;

  return (
    <div className="email-details">
      <h3>{selectedEmail.subject}</h3>
      <p>{selectedEmail.body}</p>
      <button className="reply-button">Reply</button>
    </div>
  );
};

export default EmailDetails;
