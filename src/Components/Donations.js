import React, { useState } from 'react';

import DonationModal from './DonationModal';
import DonationCard from './DonationCard';


export default function Donations() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedSortOption, setSelectedSortOption] = useState('All');
    const [zipcode, setZipCode] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false)

    const [donations, setDonations] = useState([
        {
            id: 1,
            title: 'Donation 1',
            category: 'Category 1',
            description: 'Description for Donation 1',
            user: 'User 1',
            distance: 5,
            image: 'https://placekitten.com/128/128', 
          },
          {
            id: 2,
            title: 'Donation 2',
            category: 'Category 2',
            description: 'Description for Donation 2',
            user: 'User 2',
            distance: 10,
            image: 'https://placekitten.com/128/128', 
          },
    ])

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
                                        <span>{selectedItem || 'Dropdown button'}</span>
                                        <span className="icon is-small">
                                            <i className={`fas fa-angle-${isDropdownOpen ? 'up' : 'down'}`} aria-hidden="true"></i>
                                        </span>
                                    </button>
                                </div>
                                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        <a href="#" className={`dropdown-item ${selectedItem === 'Dropdown item' ? 'is-active' : ''}`} onClick={() => selectItem('Dropdown item')}>
                                            Dropdown item
                                        </a>
                                        <a href="#" className={`dropdown-item ${selectedItem === 'item' ? 'is-active' : ''}`} onClick={() => selectItem('item')}>
                                            item
                                        </a>
                                        <a href="#" className={`dropdown-item ${selectedItem === 'Active dropdown item' ? 'is-active' : ''}`} onClick={() => selectItem('Active dropdown item')}>
                                            Active dropdown item
                                        </a>
                                        <a href="#" className={`dropdown-item ${selectedItem === 'Other dropdown item' ? 'is-active' : ''}`} onClick={() => selectItem('Other dropdown item')}>
                                            Other dropdown item
                                        </a>
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
                                            <i className={`fas fa-angle-${isSortDropdownOpen ? 'up' : 'down'}`} aria-hidden="true"></i>
                                        </span>
                                    </button>
                                </div>
                                <div className="dropdown-menu" id="sort-dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        <a href="#" className={`dropdown-item ${selectedSortOption === 'Most Recent' ? 'is-active' : ''}`} onClick={() => selectSortOption('Most Recent')}>
                                            Most Recent
                                        </a>
                                        <a href="#" className={`dropdown-item ${selectedSortOption === 'Most Popular' ? 'is-active' : ''}`} onClick={() => selectSortOption('Most Popular')}>
                                            Most Popular
                                        </a>
                                        <a href="#" className={`dropdown-item ${selectedSortOption === 'All' ? 'is-active' : ''}`} onClick={() => selectSortOption('All')}>
                                            All
                                        </a>
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
                        <button className="button is-primary" onClick={openModal}>
                            Post +
                        </button>
                    </div>
                </div>
                <DonationModal isOpen={isModalOpen} onClose={closeModal}/>
            </div>
            <div>
                {donations.map((donation) => {
                    return (
                        <DonationCard key={donation.id} donation={donation} />
                    )
                })}
            </div>
        </div>
    );
}