import React, { useState } from "react";

const EditProfileModal = ({ user, onClose, onUpdate }) => {
  const [bio, setBio] = useState(user.bio || "");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch(`/api/users/${user.userId}/bio`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bio }),
      });

      if (!res.ok) {
        const err = await res.text();
        throw new Error(err || "Failed to save");
      }

      const updated = await res.json();
      onUpdate(updated);
    } catch (err) {
      alert(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Edit Bio</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Write something about yourself..."
            rows="5"
            style={{ width: "100%", margin: "1rem 0" }}
          />
          <div className="modal-actions">
            <button type="submit" disabled={saving}>
              {saving ? "Saving..." : "Save"}
            </button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;