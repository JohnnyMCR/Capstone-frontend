import React, { useState, useEffect } from "react";

export default function DonationEditForm({ selectedDonation, editDonation }) {
  const [editedDonation, setEditedDonation] = useState(selectedDonation || {});

  useEffect(() => {
    setEditedDonation(selectedDonation || {});
  }, [selectedDonation]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedDonation({
      ...editedDonation,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editDonation(editedDonation);
  };

  return (
    <div>
      <h2>Edit Donation</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="img"
          placeholder="Image URL"
          value={editedDonation.img || ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={editedDonation.description || ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="userName"
          placeholder="User Name"
          value={editedDonation.userName || ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="zipcode"
          placeholder="Zipcode"
          value={editedDonation.zipcode || ""}
          onChange={handleChange}
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}