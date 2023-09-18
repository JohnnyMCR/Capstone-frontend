import React, { useState } from 'react';

export default function DonationModal({ isOpen, onClose }) {
    const [donationTitle, setDonationTitle] = useState('');
    const [donationDescription, setDonationDescription] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedImage, setSelectedImage] = useState(null)

    const handleDonationTitleChange = (e) => {
        setDonationTitle(e.target.value);
    };
    const handleDonationDescriptionChange = (e) => {
        setDonationDescription(e.target.value);
    };
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };
    const handleDonationSubmit = () => {
        onClose();
    };
    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        setSelectedImage(imageFile);
      };

    return (
        <div>
        <div className={`modal ${isOpen ? 'is-active' : ''}`}>
          <div className="modal-background" onClick={onClose}></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <h1 className="modal-card-title title is-2 has-text-danger ">Create Donation</h1>
              <button className="delete" aria-label="close" onClick={onClose}></button>
            </header>
            <section className="modal-card-body has-background-info">
              <div className="field">
                <label className="label is-large has-text-danger">Donation Title</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter title"
                    value={donationTitle}
                    onChange={handleDonationTitleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label is-large has-text-danger">Donation Description</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Enter description"
                    value={donationDescription}
                    onChange={handleDonationDescriptionChange}
                  ></textarea>
                </div>
              </div>
              <div className="field">
                <label className="label is-large has-text-danger">Upload Image</label>
                <div className="control">
                  <div className="file has-name">
                    <label className="file-label ">
                      <input
                        className="file-input"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                      <span className="file-cta">
                        <span className="file-icon">
                          <i className="fas fa-upload"></i>
                        </span>
                        <span className="file-label">Choose a file…</span>
                      </span>
                      <span className="file-name">
                        {selectedImage ? selectedImage.name : 'No file selected'}
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label is-large has-text-danger">Category</label>
                <div className="control">
                  <div className="select">
                    <select
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                    >
                      <option value="" disabled>Select a category</option>
                      <option value="Category 1">Clothing</option>
                      <option value="Category 2">Toys</option>
                      <option value="Category 3">Electronics</option>

                    </select>
                  </div>
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-primary" onClick={handleDonationSubmit}>
                Create
              </button>
              <button className="button" onClick={onClose}>
                Cancel
              </button>
            </footer>
          </div>
        </div>
      </div>

    );
}







