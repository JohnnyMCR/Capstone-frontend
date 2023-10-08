import React, { useState, useContext } from "react";
import { AuthContext } from './AuthContext';
import axios from 'axios';


export default function DonationModal({ isOpen, onClose, donations, setDonations }) {

  const {currentUser, auth} = useContext(AuthContext);
  console.log(auth);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [isImageUploaded, setIsImageUploaded] = useState(false);


  const API = process.env.REACT_APP_API_URL;


  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      const newDonation = {
        user_id: currentUser.id,
        title,
        description,
        category,
        img : image,
        date: new Date().toLocaleDateString(),
      };

  
      axios
        .post(`${API}/donations`, newDonation)
        .then((res) => {
          console.log('Form submitted successfully:', res.data);
          const addedDonation = { ...res.data, username: currentUser.username };
          const newDonationsArray = [...donations, addedDonation];
          setDonations(newDonationsArray);
          setTitle('');
          setDescription('');
          setCategory('');
          setImage(null);
          setIsImageUploaded(true); 
          onClose();
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      console.error('currentUser is not defined');
    }
  };

  return (
    <div>
      <div className={`modal ${isOpen ? "is-active" : ""}`}>
        <div className="modal-background" onClick={onClose}></div>
        <div className="modal-card">
          <section className="modal-card-body has-background-info">
            <div className="columns px-3 py-3">
              <h1 className="modal-card-title title is-2 has-text-primary has-text-left">
                Village Donation
              </h1>
              <button
                className="delete"
                aria-label="close"
                onClick={onClose}
              ></button>
            </div>
            <div className="field">
              {/* <label className="label is-large has-text-danger">Donation Title</label> */}
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              {/* <label className="label is-large has-text-danger">Donation Description</label> */}
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="field">
              {/* <label className="label is-large has-text-danger">Upload Image</label> */}
              <div className="control">
                <div className="file has-name">
                  <label className="file-label ">
                    <input
                      className="file-input"
                      type="file"
                      accept="image/*"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                    <span className="file-cta">
                      <span className="file-icon">
                        <i className="fas fa-upload"></i>
                      </span>
                      <span className="file-label">Upload Image…</span>
                    </span>
                    <span className="file-name">
                      {image ? image.name : "No file selected"}
                    </span>
                  </label>
                </div>
              </div>
            </div>
            {isImageUploaded ? (
          <p className="has-text-success">Image uploaded successfully!</p>
        ) : (
          <p className="has-text-danger">Please upload an image.</p>
        )}
            <div className="field">
              {/* <label className="label is-large has-text-danger">Category</label> */}
              <div className="control">
                <div className="select">
                  <select
                    className="px-6"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">
                      Select A Category
                    </option>
                    <option value="Clothing">Clothing</option>
                    <option value="Toys">Toys</option>
                    <option value="Electronics">Electronics</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column has-text-left">
                <button
                  className="button is-medium mt-4 is-outlined is-primary is-rounded has-text-primary has-text-left has-text-weight-bold"
                  aria-label="close"
                  onClick={onClose}
                  style={{
                    boxShadow: "none",
                    backgroundColor: "white",
                    color: "inherit",
                  }}
                >
                  Cancel
                </button>
              </div>
              <div className="column has-text-right">

              <button
                className="button is-primary is-rounded is-medium mt-4 has-text-right has-text-weight-bold"
                type="button"
                onClick={handleSubmit}
              >
                Create
              </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
