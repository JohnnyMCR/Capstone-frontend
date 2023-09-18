import React from "react";
import Donations from "../Components/Donations";

export default function SingleDonation({ donation }) {
    return (
        <div className="SingleDonation">
            <h2>Single Donation</h2>
            {donation ? (
                <Donations
                    donation={donation}
                    onEdit={(editedDonation) => {
                    }}
                    onDelete={(deletedDonation) => {
                    }}
                />
            ) : (
                <p>No donation selected.</p>
            )}
        </div>
    );
}
