// app/not-found.js
export default function NotFound() {
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
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
        <p style={{ marginBottom: '2rem' }}>
          Sorry, the page you're looking for does not exist.
        </p>
        <a
          href="/"
          style={{
            color: '#fff',
            backgroundColor: '#0070f3',
            padding: '10px 20px',
            borderRadius: '5px',
            textDecoration: 'none',
          }}
        >
          Go Back Home
        </a>
      </div>
    );
  }
  