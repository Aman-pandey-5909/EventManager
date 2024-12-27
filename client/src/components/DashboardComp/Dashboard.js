import React from 'react'
import Navbar from '../Navbar/Navbar';

const Dashboard = ({ params = {} }) => {
    const username = params.name || "User";
    const totalevents = params.totalEvents || 0;
    const activeevents = params.activeEvents || 0;
    const closedevents = params.closedEvents || 0;
    const memberSinceDate = params.memberSince || Date.now();
    const daysSinceMember = Math.floor((Date.now() - memberSinceDate) / (1000 * 60 * 60 * 24));

    return (
      <div className="Dashboard-body">
        <Navbar />
          <h1>{username}'s Dashboard</h1>
          <div className="Dashboard-content">
              <div className="Total-events">Total Events: {totalevents}</div>
              <div className="Active-events">Active Events: {activeevents}</div>
              <div className="Closed-events">Closed Events: {closedevents}</div>
              <div className="Member-since">Member Since: {daysSinceMember}</div>
          </div>
      </div>
    );
};


export default Dashboard
