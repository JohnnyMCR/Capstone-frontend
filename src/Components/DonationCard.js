import React from "react"
import SingleDonation from "./SingleDonation";

export default function DonationCard({ donation }) {
   
    return (
        <div className="column is-10 ml-4">
            <div className="card mb-5">
                <div className="card-content">
                    <div className='columns'>
                        <div className='column is-2'>
                            <figure className="image is-128x128">
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                            </figure>
                        </div>
                        <div className='column has-text-left is-three-quarters'>
                            <p className='is-size-4'>{donation.title}</p>
                            <p className='is-size-6'>{donation.category}</p>
                            <p className='is-size-6'>{donation.description}</p>
                            <p className='is-size-6'>{donation.user}</p>
                            <p className='is-size-6'>Distance:{donation.distance}</p>
                        </div>
                        <SingleDonation/>
                    </div>
                </div>
            </div>
        </div>
    )
}