import React from 'react';
//add dummy data
const Files = ({files}) => {
  return (
    <section className="files-section">
      <h3>Files</h3>
      <ul className="files-list">
        {files.map((file, index) => (
          <li key={index} className="file-item">{file}</li>
        ))}
      </ul>
    </section>
  );
};

export default Files;