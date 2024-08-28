import React from 'react';

const Activities = ({ activities }) => {
  return (
    <div className="activities">
      <h4>Activities</h4>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;
