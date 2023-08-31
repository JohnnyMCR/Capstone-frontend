import axios from "axios";
import React, { useState, useEffect } from "react";
// import NewDonation from "../Pages/NewDonation";
// import DonationForm from "./DonationForm";
// import DonationEditForm from "./DonationEditForm";
// import DonationsLocation from "./DonationsLocation";

export default function Donations() {
    const [donations, setDonations] = useState([]);
    const [selectedDonation, setselectedDonations] = useState(null);

    //add Donation
    const addDonation = (NewDonation) => {
        setDonations([...donations, NewDonation]);
    };

    //edit existing Donation
    const editDonation =(editedDonation) => {

    };

    return (
        <div>
            <h1>Donations</h1>
            {/* <DonationForm addDonation={addDonation} />
            <DonationEditForm selectedDonation={selectedDonation} editDonation={editDonation} />
            <DonationsLocation donations={donations} /> */}
        </div>
    );
}