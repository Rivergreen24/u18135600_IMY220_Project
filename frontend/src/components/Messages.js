import React from 'react';

const Messages = ({messges}) => {
  return (
    <section>
      <h3>Messages</h3>
      {messges.map((msg,index)=>(
        <p key={index}>{msg}</p>
      ))}
    </section>
  );
};

export default Messages;