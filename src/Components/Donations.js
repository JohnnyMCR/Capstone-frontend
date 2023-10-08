import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DonationModal from './DonationModal';
import DonationCard from './DonationCard';
import backgroundImage from "../Pages/DONATION4.png";

const API = process.env.REACT_APP_API_URL;

export default function Donations({ user }) {
    const [curUser, setCurUser] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [donations, setDonations] = useState([]);
    const [filteredItems, setFilteredItems] = useState([])

    useEffect(() => {
        axios.get(`${API}/donations`)
            .then((response) => {
                setDonations(response.data);
                setFilteredItems(response.data)
            })
            .catch((e) => console.warn("catch", e));
    }, [isModalOpen]);

    useEffect(() => {
        if (user) {
          axios
            .get(`${API}/users`)
            .then((response) => {
              console.log('API Response:', response.data);
              const foundUser = response.data.find((element) => element.username === user.displayName);
              if (foundUser) {
                setCurUser(foundUser);
              } else {
                console.error('User not found');
              }
            })
            .catch((error) => {
              console.error('Error fetching username:', error);
              setCurUser('Error fetching username');
            });
        } else {
          setCurUser('User ID not defined');
        }
      }, [user]);

      const handleFilterSelect = (filterOption) => {
        setSelectedFilter(filterOption);
    
        if (filterOption === "All") {
          setFilteredItems(donations);
        } else {
          const filtered = donations.filter((donation) => donation.category === filterOption);
          setFilteredItems(filtered);
        }
      };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    

    const heroStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
    backgroundPosition: "center",
        
       
      };
    return (
        <div>
             <section className="hero is-medium has-background-info" style={heroStyle}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1 has-text-white is-italic is-overlay is-flex is-justify-content-center is-align-items-center">
            </h1>
          </div>
        </div>
      </section>
            <div className='columns mt-1'>
                <div className='column is-half ml-3'>
                    <div className="field is-grouped">
                        <div className="control">
                            <div className="dropdown is-hoverable">
                                <div className="dropdown-trigger">
                                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                                        <span>Filter: {selectedFilter}</span>
                                        <span className="icon is-small">
                                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                                        </span>
                                    </button>
                                </div>
                                <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                                    <div className="dropdown-content">
                                    <div className="dropdown-item" onClick={() => handleFilterSelect("All")}>
                                            All
                                        </div>
                                        <div className="dropdown-item" onClick={() => handleFilterSelect("Clothing")}>
                                            Clothing
                                        </div>
                                        <div className="dropdown-item" onClick={() => handleFilterSelect("Toys")}>
                                            Toys
                                        </div>
                                        <div className="dropdown-item" onClick={() => handleFilterSelect("Food")}>
                                            Food
                                        </div>
                                        <div className="dropdown-item" onClick={() => handleFilterSelect("Educational")}>
                                            Educational
                                        </div>
                                        <div className="dropdown-item" onClick={() => handleFilterSelect("Other")}>
                                            Other
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='column'>
                    <div className="control" style={{ textAlign: 'right', marginRight: '20px' }}>
                        <button className="button is-medium is-rounded is-primary has-text-weight-bold" onClick={openModal}>
                            Post +
                        </button>
                    </div>
                </div>
                <DonationModal isOpen={isModalOpen} onClose={closeModal} user={user} donations={donations} setDonations={setDonations} />
            </div>
            <p className="has-text-left ml-5 has-text-primary is-size-3">Category: {selectedFilter} </p>
            <div>
                {filteredItems.map((donation) => {
                    return <DonationCard key={donation.id} donation={donation} user={curUser} />;
                })}
            </div>
        </div>
    );
}


