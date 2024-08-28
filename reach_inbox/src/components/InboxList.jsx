import React from 'react';

const InboxList = ({ emails, onSelectEmail }) => {
  return (
    <div className="inbox-list">
      {emails.map((email, index) => (
        <div key={index} className="email-item" onClick={() => onSelectEmail(email)}>
          <span className="email-address">{email.from}</span>
          <span className="email-date">{email.date}</span>
          <span className="email-subject">{email.subject}</span>
        </div>
      ))}
    </div>
  );
};

export default InboxList;
