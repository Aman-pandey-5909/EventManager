// app/error.js
'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f4f4f4',
        color: '#333',
      }}
    >
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>500</h1>
      <p style={{ marginBottom: '2rem' }}>
        Oops! Something went wrong on our end.
      </p>
      <button
        onClick={() => reset()} // Attempt to recover the page
        style={{
          color: '#fff',
          backgroundColor: '#0070f3',
          padding: '10px 20px',
          borderRadius: '5px',
          textDecoration: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Try Again
      </button>
    </div>
  );
}
