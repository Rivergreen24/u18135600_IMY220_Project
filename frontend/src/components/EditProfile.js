import React from 'react';

const EditProfile = () => {
    return (
        <form className="edit-profile-form">
            <h4>Edit profile:</h4>
            <label>
                Name: 
                <input type="text" />
            </label>
            <label>
                Bio: 
                <textarea></textarea>
            </label>
            <button type="submit">Save</button>
        </form>
    );
};

export default EditProfile;