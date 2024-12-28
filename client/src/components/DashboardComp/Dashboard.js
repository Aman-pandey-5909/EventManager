'use client';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './dashboard.module.css';
import EventCard from '../eventComp/EventCard';
import Link from 'next/link';

const Ismember = () => {
  return (
    <div className='border-black border'>
            <div className='border-b-2 p-3 text-white text-2xl bg-slate-600 border-gray-700'>
                Member Since
            </div>
            <div className='text-center text-xl'>
                <div>Not a Member?</div>
                <div>
                  <Link className='text-blue-600 underline' href="/membership">Join Now!</Link>
                </div>
            </div>
        </div>
  )
};

const Dashboard = ({ params = {} }) => {
  const username = params.name || "User";
  const totalevents = params.totalEvents || 0;
  const activeevents = params.activeEvents || 0;
  const closedevents = params.closedEvents || 0;
  const memberSince = params.memberSince || 0;

  const daysSinceMember = memberSince
    ? Math.floor((Date.now() - memberSince) / (1000 * 60 * 60 * 24))
    : null;

  return (
    <div className="Dashboard-body">
      <Navbar />
      <div className="grid p-3 grid-cols-[20%_80%]">
        <div className="sidebar p-3 border-2 border-black">
          <ul>
            <li>Overview</li>
            <li>Events</li>
            <li>Settings</li>
          </ul>
        </div>
        <div className="border-2 p-3 border-purple-600">
          <h1 className="text-3xl text-center my-3">{username}'s Dashboard</h1>
          <div className="Dashboard-content grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={`Total-events ${styles.eventCenter}`}>
              <EventCard params={{ name: 'Total Events', totalEvents: totalevents }} />
            </div>
            <div className={`Active-events ${styles.eventCenter}`}>
              <EventCard params={{ name: 'Active Events', totalEvents: activeevents }} />
            </div>
            <div className={`Closed-events ${styles.eventCenter}`}>
              <EventCard params={{ name: 'Closed Events', totalEvents: closedevents }} />
            </div>
            <div className={`Member-since ${styles.eventCenter}`}>
              {daysSinceMember === null ? (
                <Ismember />
              ) : (
                <EventCard params={{ name: 'Member Since', totalEvents: daysSinceMember }} />
              )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
