import React from 'react';

const CreateProject = () => {
  return (
    <form className="create-project-form">
      <label>
        Project Name:
        <input type="text" required />
      </label>
      <label>
        Description:
        <textarea required></textarea>
      </label>
      <button type="submit">Create Project</button>
    </form>
  );
};

export default CreateProject;