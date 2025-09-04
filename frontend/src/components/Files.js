import React from 'react';
//add dummy data
const Files = ({files}) => {
  return (
    <section>
      <h3>Files</h3>
      <ul>
        {files.map((file, index) => <li key={index}>{file}</li>)}
      </ul>
    </section>
  );
};

export default Files;