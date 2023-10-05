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
    const [zipcode, setZipCode] = useState('');
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        axios.get(`${API}/donations`)
            .then((response) => {
                setDonations(response.data);
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
    };

    const handleZipCodeChange = (e) => {
        setZipCode(e.target.value);
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
              {/* Care Village Donation */}
            </h1>
          </div>
        </div>
      </section>
            <div className='columns mt-1'>
                <div className='column is-half ml-3'>
                    <div className="field is-grouped">

                        {/* 1st */}
                        {/* <div className="control" style={{ marginLeft: '10px' }}>
                            <div className={`dropdown ${isDropdownOpen ? 'is-active' : ''}`}>
                                <div className="dropdown-trigger">
                                    <button
                                        className="button"
                                        aria-haspopup="true"
                                        aria-controls="dropdown-menu"
                                        onClick={toggleDropdown}
                                    >
                                        <span>{selectedItem || 'Dropdown Button'}</span>
                                        <span className="icon is-small">
                                            <i
                                                className={`fas fa-angle-${isDropdownOpen ? 'up' : 'down'}`}
                                                aria-hidden="true"
                                            ></i>
                                        </span>
                                    </button>
                                </div>
                                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        <button
                                            className={`dropdown-item ${selectedItem === 'Dropdown item' ? 'is-active' : ''}`}
                                            onClick={() => selectItem('Dropdown item')}
                                        >
                                            Dropdown Item
                                        </button>
                                        <button
                                            className={`dropdown-item ${selectedItem === 'item' ? 'is-active' : ''}`}
                                            onClick={() => selectItem('item')}
                                        >
                                            Item
                                        </button>
                                        <button
                                            className={`dropdown-item ${selectedItem === 'Active dropdown item' ? 'is-active' : ''}`}
                                            onClick={() => selectItem('Active dropdown item')}
                                        >
                                            Active Dropdown Item
                                        </button>
                                        <button
                                            className={`dropdown-item ${selectedItem === 'Other dropdown item' ? 'is-active' : ''}`}
                                            onClick={() => selectItem('Other dropdown item')}
                                        >
                                            Other Dropdown Item
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="control">
                            <div className="dropdown is-hoverable">
                                <div className="dropdown-trigger">
                                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                                        <span>Category: {selectedFilter}</span>
                                        <span className="icon is-small">
                                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                                        </span>
                                    </button>
                                </div>
                                <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                                    <div className="dropdown-content">
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
                        {/* 1st */}


                        {/* 2nd */}
                        {/* <div className="control">
                            <div className="dropdown is-hoverable">
                                <div className="dropdown-trigger">
                                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                                        <span>Sort: {selectedSortOption}</span>
                                        <span className="icon is-small">
                                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                                        </span>
                                    </button>
                                </div>
                                <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                                    <div className="dropdown-content">
                                        <div className="dropdown-item" onClick={() => handleSortSelect("Most Recent")} >
                                            Most Recent
                                        </div>
                                        <div className="dropdown-item" onClick={() => handleSortSelect("Most Popular")}>
                                            Most Popular
                                        </div>
                                        <div className="dropdown-item" onClick={() => handleSortSelect("All")}>
                                            All
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* 2nd */}

                        <div className="field has-addons" style={{ marginRight: '20px' }}>
                            <p className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Zip Code"
                                    value={zipcode}
                                    onChange={handleZipCodeChange}
                                />
                            </p>
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
            <div>
                {donations.map((donation) => {
                    return <DonationCard key={donation.id} donation={donation} user={curUser} />;
                })}
            </div>
        </div>
    );
}


//// import axios from "axios";
// import React, { useState } from "react";
// import DonationEditForm from "./DonationEditForm";
// import DonationForm from "./DonationForm";
// import DonationsLocation from "./DonationsLocation";
// function SingleDonation ({ donation, onEdit, onDelete }) {
//     return (
//         <div>
//             <img src={donation.img} alt="Donation" />
//             <p>Description: {donation.description}</p>
//             <p>User Name: {donation.userName}</p>
//             <p>Zipcode: {donation.zipcode}</p>
//             <button onClick={() => onEdit(donation)}>Edit</button>
//             <button onClick={() => onDelete(donation)}>Delete</button>
//         </div>
//     );
// }
// export default function Donations() {
//     const [donations, setDonations] = useState([]);
//     const [selectedDonation, setSelectedDonation] = useState(null);
//     //add Donation
//     const addDonation = (newDonation) => {
//         setDonations([...donations, newDonation]);
//     };
//     //edit existing Donation
//     const editDonation =(editedDonation) => {
//         const index = donations.findIndex((donation) => donation.id === editedDonation.id);
//         if (index !== -1) {
//             const updatedDonations = [...donations];
//             updatedDonations[index] = editDonation;
//             setDonations(updatedDonations);
//             setSelectedDonation(null);
//         }
//     };
// //delete existing Donation
// const deleteDonation = (donationId) => {
//     const updatedDonations = donations.filter((donation) => donation.id !== donationId);
//     setDonations(updatedDonations);
// };
//     return (
//         <div>
//             <h1>Donations</h1>
//             <DonationForm addDonation={addDonation} />
//             <DonationEditForm selectedDonation={selectedDonation} editDonation={editDonation} />
//             <DonationsLocation donations={donations} />
//         </div>
//     );
// }