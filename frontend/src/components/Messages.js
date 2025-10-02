import React from 'react';

const Messages = ({messages}) => {
  return (
    <section className="messages-section">
      <h3>Messages</h3>
      <div className="messages-log">
        {messages.map((msg, index) => (
          <div key={index} className="message-item">{msg}</div>
        ))}
      </div>
    </section>
  );
};

export default Messages;