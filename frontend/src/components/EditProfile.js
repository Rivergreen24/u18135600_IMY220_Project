import React from 'react';

const EditProfile = () => {
  return (
    <form>
      <label>Name: <input type="text" /></label>
      <label>Bio: <textarea></textarea></label>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditProfile;