import React from 'react';
import axios from "axios";
import { useState, useEffect, useContext } from 'react';
import ShowDonation from './ShowDonation';
import { AuthContext } from './AuthContext';
import backgroundImage from "../Pages/Dashboard4.png"



const API = process.env.REACT_APP_API_URL;

export default function UserDash() {

  const { currentUser } = useContext(AuthContext)


  const [userForums, setUserForums] = useState([])
  const [userDonations, setUserDonations] = useState([])
  const [selectedDonation, setSelectedDonation] = useState(null);

  useEffect(() => {
    if (currentUser) {
      axios
        .get(`${API}/forums/user/${currentUser.id}`)
        .then((response) => {
          setUserForums(response.data);
        })
        .catch((e) => console.warn("catch", e));
    }
  }, [currentUser]);

  


  console.log(userForums, 'user forumsss')

  useEffect(() => {
    if (currentUser) {
      axios
        .get(`${API}/donations/user/${currentUser.id}`)
        .then((response) => {
          setUserDonations(response.data);
        })
        .catch((e) => console.warn("catch", e));
    }
  }, [currentUser]);

  console.log(currentUser, "what user?")


  const cardInfoStyle = {
    marginBottom: '10px',
  };
  // const cardContentStyle = {
  //   maxHeight: '275px',
  //   overflow: 'hidden',
  // };


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
                <h1 className="card-header-title has-text-centered has-text-white title">Welcome, {currentUser?.username}!</h1>
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
                    <p style={cardInfoStyle} ><strong className='has-text-dark'>Username: {currentUser?.username}</strong></p>
                    <p style={cardInfoStyle}><strong className='has-text-dark'>Email: </strong>{currentUser?.email}</p>
                    <p style={cardInfoStyle}><strong className='has-text-dark'>Address: </strong>{currentUser?.zipcode}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-two-thirds">
            <div className="card" style={{ maxHeight: '400px', overflowY: 'auto' }}>
              <div className="card-header has-background-primary">
                <h1 className="card-header-title has-text-white title ">Villager Post</h1>
              </div>
              <div className="card-content ">
                <ul>
                  {userForums.map((forum, index) => (
                    <div className="card mb-5">
                      <div className="card-content has-background-info">
                        <div className='columns'>
                          <div className='column has-text-left is-full'>
                            <h1 className='title has-text-dark' style={{ marginLeft: '10px' }}>{forum.title}</h1>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                              <img
                                src="https://via.placeholder.com/150"
                                alt="Generic Circular Placeholder"
                                style={{
                                  width: '40px',
                                  height: '40px',
                                  borderRadius: '50%',
                                  objectFit: 'cover',
                                  backgroundColor: '#333'
                                }}
                              />
                              <p className='is-size-6 has-text-dark ml-5'>{forum.username}</p>
                              <span className='is-size-6 has-text-dark ml-5'>{forum.date}</span>
                            </div>
                            <span className='column is full is-size 6 has-text-dark'>{forum.content}</span>
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
                <h1 className="card-header-title has-text-white title">Villager Donations</h1>
              </div>
              <div className="card-content">
                {userDonations.map((donation, index) => (
                  <div className="column" key={index}>
            <div className="card mb-5">
                    <div className='columns'>
                        <div className='column is-flex is-align-items-center is-justify-content-center'>
                            <figure className="image is-128x128 ">
                            <img src={donation.img || "https://bulma.io/images/placeholders/96x96.png"} alt="Donation" />
                            </figure>
                        </div>
                        <div className='column has-text-left is-three-quarters has-background-info'>
                            <p className='title is-size-4 has-text-primary'>Title: {donation.title}</p>
                            <p className='subtitle is-size-6 has-text-dark pt-4'>Category: {donation.category}</p>
                            <p className='subtitle is-size-6 has-text-dark'>Description: {donation.description}</p>
                            <div className="columns mb-3">

                                {/* <figure className=" image is-48x48 ml-2">
                                <img src="https://bulma.io/images/placeholders/48x48.png" alt="Placeholder" 
                                className="is-rounded"/>
                            </figure> */}
                            {/* <p className='column subtitle is-size-6 has-text-dark'>
                            User: {donation.user}</p> */}
                            </div>
                            {/* <p className='subtitle is-size-6 has-text-dark'>Distance: {donation.distance}</p> */}
                            <p className='subtitle is-size-6 has-text-dark'>Posted by: {donation.username}</p>
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
          <ShowDonation donation={selectedDonation} closeModal={closeDonationModal} />
        )}
      </div>
    </div>
  );
}