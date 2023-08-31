import React, { useState } from 'react';

export default function DonationForm({ addDonation }) {
    const [donationData, setDonationData] = useState({
        img: '',
        description: '',
        userName:'',
        zipCode: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDonationData({ ...donationData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addDonation(donationData);
        setDonationData({
            img: '',
            description: '',
            userName:'',
            zipCode: '',
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>description bubble</h1>
            <button type="submit">Submit Donation</button>
        </form>
    );
}