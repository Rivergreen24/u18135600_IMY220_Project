import React from 'react';

const Files = ({ files }) => {
  if (!files || files.length === 0) return <p>No files</p>;

  return (
    <ul>
      {files.map((file, index) => (
        <li key={index}>
          <a href={file.url} target="_blank" rel="noreferrer">
            {file.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Files;
