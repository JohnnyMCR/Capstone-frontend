import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DonationModal from './DonationModal';
import DonationCard from './DonationCard';
const API = process.env.REACT_APP_API_URL;


export default function Donations() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedSortOption, setSelectedSortOption] = useState('All');
    const [zipcode, setZipCode] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [donations, setDonations] = useState([]);

    useEffect(() => {
        axios.get(`${API}/donations`)
            .then((response) => {
                setDonations(response.data);
            })
            .catch((e) => console.warn("catch", e));
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleSortDropdown = () => {
        setIsSortDropdownOpen(!isSortDropdownOpen);
    };

    const selectItem = (item) => {
        setSelectedItem(item);
        setIsDropdownOpen(false);
    };

    const selectSortOption = (option) => {
        setSelectedSortOption(option);
        setIsSortDropdownOpen(false);
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

    return (
        <div>
            <div className='columns mt-1'>
                <div className='column is-half'>
                    <div className="field is-grouped">
                        <div className="control" style={{ marginLeft: '10px' }}>
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
                        </div>
                        <div className="control">
                            <div className={`dropdown ${isSortDropdownOpen ? 'is-active' : ''}`}>
                                <div className="dropdown-trigger">
                                    <button
                                        className="button"
                                        aria-haspopup="true"
                                        aria-controls="sort-dropdown-menu"
                                        onClick={toggleSortDropdown}
                                    >
                                        <span>Sort: {selectedSortOption}</span>
                                        <span className="icon is-small">
                                            <i
                                                className={`fas fa-angle-${isSortDropdownOpen ? 'up' : 'down'}`}
                                                aria-hidden="true"
                                            ></i>
                                        </span>
                                    </button>
                                </div>
                                <div className="dropdown-menu" id="sort-dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        <button
                                            className={`dropdown-item ${selectedSortOption === 'Most Recent' ? 'is-active' : ''}`}
                                            onClick={() => selectSortOption('Most Recent')}
                                        >
                                            Most Recent
                                        </button>
                                        <button
                                            className={`dropdown-item ${selectedSortOption === 'Most Popular' ? 'is-active' : ''}`}
                                            onClick={() => selectSortOption('Most Popular')}
                                        >
                                            Most Popular
                                        </button>
                                        <button
                                            className={`dropdown-item ${selectedSortOption === 'All' ? 'is-active' : ''}`}
                                            onClick={() => selectSortOption('All')}
                                        >
                                            All
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                <DonationModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
            <div>
                {donations.map((donation) => {
                    return <DonationCard key={donation.id} donation={donation} />;
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