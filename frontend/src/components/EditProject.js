import React from 'react';

const EditProject = () => {
  return (
    <form>
      <label>Name: <input type="text" /></label>
      <label>Description: <textarea></textarea></label>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditProject;