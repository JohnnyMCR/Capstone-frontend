import React, { useState, useEffect } from 'react';

function DonationEditForm({ selectedDonation, editDonation }) {
  const [editedDonation, setEditedDonation] = useState({});

  useEffect(() => {
    setEditedDonation(selectedDonation);
  }, [selectedDonation]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedDonation({ ...editedDonation, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editDonation(editedDonation);
    setEditedDonation({});
  };

  if (!selectedDonation) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Form inputs for editing */}
      <h1> TEST </h1>
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default DonationEditForm;
