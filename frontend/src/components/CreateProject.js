import React from 'react';

const CreateProject = () => {
  return (
    <form>
      <label>Project Name: <input type="text" required="required"/></label>
      <label>Description: <textarea required="required"></textarea></label>
      <button type="submit">Create Project</button>
    </form>
  );
};

export default CreateProject;