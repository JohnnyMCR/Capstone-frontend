// import axios from "axios";
import React, { useState } from "react";
import DonationEditForm from "./DonationEditForm";
import DonationForm from "./DonationForm";
import DonationsLocation from "./DonationsLocation";

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

export default function Donations() {
    const [donations, setDonations] = useState([]);
    const [selectedDonation, setSelectedDonation] = useState(null);

    //add Donation
    const addDonation = (newDonation) => {
        setDonations([...donations, newDonation]);
    };

    //edit existing Donation
    const editDonation =(editedDonation) => {
        const index = donations.findIndex((donation) => donation.id === editedDonation.id);
        if (index !== -1) {
            const updatedDonations = [...donations];
            updatedDonations[index] = editDonation;
            setDonations(updatedDonations);
            setSelectedDonation(null);
        }
    };

    // //delete existing Donation
    // const deleteDonation = (donationId) => {
    //     const updatedDonations = donations.filter((donation) => donation.id !== donationId);
    //     setDonations(updatedDonations);
    // };

    return (
        <div>
            <h1>Donations</h1>
            <DonationForm addDonation={addDonation} />
            <DonationEditForm selectedDonation={selectedDonation} editDonation={editDonation} />
            <DonationsLocation donations={donations} />
        </div>
    );
}