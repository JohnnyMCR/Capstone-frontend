import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import SingleDonation from './SingleDonation';
import backgroundImage from "../Pages/Dashboard4.png"

const API = process.env.REACT_APP_API_URL;

export default function UserDash({user}) {
  

  const [userForums, setUserForums] = useState([])
  const [userDonations, setUserDonations] = useState([])
  const [selectedDonation, setSelectedDonation] = useState(null);

  useEffect(() => {
    axios
      .get(`${API}/forums/user/1`)
      .then((response) => {
        setUserForums(response.data);
      })
      .catch((e) => console.warn("catch", e));
  }, []);

  useEffect(() => {
    axios
      .get(`${API}/donations/user/1`)
      .then((response) => {
        setUserDonations(response.data);
      })
      .catch((e) => console.warn("catch", e));
  }, []);

  console.log(user, "what user?")


  const cardInfoStyle = {
    marginBottom: '10px',
  };
  const cardContentStyle = {
    maxHeight: '275px',
    overflow: 'hidden',
  };

  const openDonationModal = (donation) => {
    setSelectedDonation(donation);
    console.log('Donation clicked', donation);
  };

  const closeDonationModal = () => {
    setSelectedDonation(null);
  };


  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "contain",
backgroundPosition: "center",
    
   
  };
  return (
    <div>
<section className="hero is-medium has-background-info mb-6" style={heroStyle}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1 has-text-primary is-italic is-overlay is-flex is-justify-content-center is-align-items-center">
              {/* Welcome, {user?.displayName}! */}
            </h1>
          </div>
        </div>
      </section>
    <div className="container"> 
      <div className="columns">
        <div className="column is-one-third">
          <div className="card">
            <div className="card-header has-background-primary">
              <h1 className="card-header-title title has-text-centered has-text-white">Welcome, {user?.displayName}!</h1>
            </div>
            <div className="card-content has-background-info">
              <div className="media">
                <div className="media-left">
                  {/* Placeholder image */}
                  <figure className="image is-64x64">
                    <img
                      src="https://via.placeholder.com/64x64" // Placeholder image URL
                      alt="User"
                    />
                  </figure>
                </div>
                <div className="media-content has-text-dark">
                  <p style={cardInfoStyle} ><strong className='has-text-dark'>Username:</strong></p>
                  <p style={cardInfoStyle}><strong className='has-text-dark'>Address:</strong> 123 Main St</p>
                  <p style={cardInfoStyle}><strong className='has-text-dark'>Email:</strong> john@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-two-thirds">
          <div className="card" style={{ maxHeight: '400px', overflowY: 'auto' }}>
            <div className="card-header has-background-primary">
              <h1 className="card-header-title has-text-white title ">Your Forums</h1>
            </div>
            <div className="card-content has-background-info">
              <ul>
                {userForums.map((forum, index) => (
                  <div className="card mb-5" key={index}>
                    <div className="card-content" style={cardContentStyle}>
                      <div className='columns'>
                        <div className='column has-text-left is-full has-background-info'>
                          <h1 className='column is-two-thirds is-size-4 has-background-warning'>{forum.title}</h1>
                          <span className='column is-two-thirds is-size-6 has-background-primary'>{forum.date}</span>
                          <p className='column is-two-thirds is-size-7 has-background-danger'>{forum.content}</p>
                          <p className='column is-two-thirds is-size-7 has-background-light'>{forum.date}</p>
                          <p className='column is-two-thirds is-size-7 has-background-dark'>xuxs</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div className="card mb-5" style={{ maxHeight: '400px', overflowY: 'auto', marginTop: '20px' }}>
            <div className="card-header has-background-primary">
              <h1 className="card-header-title has-text-white title">My Donations</h1>
            </div>
            <div className="card-content has-background-info">
              {userDonations.map((donation, index) => (
                <div className="column" key={index}>
                  <div className="card mb-5">
                    <div className="card-content">
                      <div className="columns">
                        <div className="column">
                          <figure
                            className="image is-128x128"
                            onClick={() => openDonationModal(donation)} // Add onClick to the image
                            style={{ cursor: 'pointer' }} // Add a pointer cursor to indicate it's clickable
                          >
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder" />
                          </figure>
                        </div>
                        <div className="column has-text-left is-three-quarters has-background-info">
                          <p className="is-size-4 has-text-danger">Title: {donation.title}</p>
                          <p className="is-size-6 has-text-dark">Category: {donation.category}</p>
                          <p className="is-size-6 has-text-dark">Description: {donation.description}</p>
                          <p className="is-size-6 has-text-dark">User: {donation.user}</p>
                          <p className="is-size-6 has-text-dark">Distance: {donation.distance}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {selectedDonation && (
        <SingleDonation donation={selectedDonation} closeModal={closeDonationModal} />
      )}
    </div>
    </div>
  );
}
