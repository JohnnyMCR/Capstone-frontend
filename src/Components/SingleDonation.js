import React from "react";
import Donation from "../Components/Donation";

export default function SingleDonation({ donation }) {
    return (
        <div className="SingleDonation">
            <h2>Single Donation</h2>
            {donation ? (
                <Donation
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
