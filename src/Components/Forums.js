import React, { useState } from 'react';

import ForumModal from './ForumModal';

export default function Forums() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedSortOption, setSelectedSortOption] = useState('All');
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className='columns mt-1'>
                <div className='column is-one-fifth'>
                    <div className="field is-grouped">
                        <div className="control">
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
                    </div>
                </div>
                <div className='column'>
                    <div className="control" style={{ textAlign: 'right', marginRight: '20px' }}>
                        <button className="button is-primary" onClick={openModal}>
                            Post +
                        </button>
                    </div>
                </div>
                <ForumModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
            <div className="columns">
                <div className="column is-8 ml-4">
                    <div className="card mb-5">
                        <div className="card-content">
                            <div className='columns'>
                                <div className='column has-text-left'>
                                <p className='is-size-4'>Post Title <span className='is-size-6'>date</span>
                                </p>
                                    <p className='is-size-6'>User</p>
                                    <p className='is-size-6'>post content, and more content</p>
                                    <p className='is-size-6'>Category</p>
                                    <br/>
                                    <p>See More..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <ul>
                        <li><figure className="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                        </figure></li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}