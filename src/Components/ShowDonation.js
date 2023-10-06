import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function ShowDonation({ donation_id }) {
  const [donation, setDonation] = useState({});
  const [donationUser, setDonationUser] = useState({});

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    axios
      .get(`${API}/donations/${donation_id}`)
      .then((response) => {
        setDonation(response.data);

        axios
          .get(`${API}/users/${response.data.user_id}`)
          .then((userResponse) => {
            if (userResponse.data && userResponse.data.username) {
              setDonationUser(userResponse.data);
            } else {
              setDonationUser({ username: 'Unknown User' });
            }
          })
          .catch((userError) => {
            console.error('Error fetching username:', userError);
            setDonationUser({ username: 'Error fetching username' });
          });
      })
      .catch((error) => {
        console.error('Error fetching donation details:', error);
      });
  }, [donation_id]);

  return (
    <div className="column control is-flex is-justify-content-center is-align-items-center">
      <button
        className="button is-medium is-rounded is-primary has-text-weight-bold"
        onClick={openModal}
      >
        Show More
      </button>

      <div className={`modal ${isModalOpen ? 'is-active' : ''}`}>
        <div className="modal-background" onClick={closeModal}></div>
        <div className="modal-card">
          <section className="modal-card-body py-6 px-6 has-background-info">
            <div className="columns">
              <h1 className="modal-card-title title is-2 has-text-primary has-text-left">
                Donation Details
              </h1>
              <button
                className="delete"
                aria-label="close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="columns">
              <div className="column">
                <figure className="image is-96x128">
                  <img
                    src={donation.img} alt="donation" 
                  />
                </figure>
              </div>
              <div className="column has-text-left is-three-fifths">
                <p className="content is-size-4 is-large has-text-primary has-text-weight-bold">
                  Title: {donation.title}
                </p>
                <p className="content is-size-6 is-large has-text-dark">
                  Donation by: {donationUser.username}
                </p>
                <p className="content is-size-6 is-large has-text-dark">
                  Description: {donation.description}
                </p>
                <p className="content is-size-6 is-large has-text-dark">
                  Category: {donation.category}
                </p>
              </div>
            </div>
            <button
              className="button has-background-primary is-rounded has-text-white has-text-weight-bold"
              onClick={closeModal}
            >
              Message "The Giver/Donor"
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
