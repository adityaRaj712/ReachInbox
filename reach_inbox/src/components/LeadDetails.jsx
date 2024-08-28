import React from 'react';

const LeadDetails = ({ lead }) => {
  return (
    <div className="lead-details">
      <h4>Lead Details</h4>
      <p>Name: {lead.name}</p>
      <p>Contact No: {lead.contactNo}</p>
      <p>Email ID: {lead.email}</p>
      <p>LinkedIn: {lead.linkedin}</p>
      <p>Company Name: {lead.company}</p>
    </div>
  );
};

export default LeadDetails;
