import React from 'react';

const Messages = ({ messages }) => {
  if (!messages || messages.length === 0) return <p>No messages yet</p>;

  return (
    <ul>
      {messages.map((msg, index) => (
        <li key={index} style={{ marginBottom: '0.5rem' }}>
          <strong>{msg.user}:</strong> {msg.message}{" "}
          <span style={{ color: '#888', fontSize: '0.9rem' }}>
            ({new Date(msg.timestamp).toLocaleString()})
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Messages;
