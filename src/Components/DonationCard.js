import React from "react"
import SingleDonation from "./SingleDonation";

export default function DonationCard({ donation }) {
   
    return (
        <div className="column is-10 ml-4">
            <div className="card mb-5">
                <div className="card-content">
                    <div className='columns'>
                        <div className='column '>
                            <figure className="image is-128x128">
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                            </figure>
                        </div>
                        <div className='column has-text-left is-three-quarters has-background-info'>
                            <p className='is-size-4 has-text-danger'>Title: {donation.title}</p>
                            <p className='is-size-6 has-text-dark'>Category: {donation.category}</p>
                            <p className='is-size-6 has-text-dark'>Description: {donation.description}</p>
                            <p className='is-size-6 has-text-dark'>User: {donation.user}</p>
                            <p className='is-size-6 has-text-dark'>Distance: {donation.distance}</p>
                        </div>
                        <SingleDonation/>
                    </div>
                </div>
            </div>
        </div>
    )
}