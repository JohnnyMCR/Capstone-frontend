import React from "react"
import SingleDonation from "./SingleDonation";

export default function DonationCard({ donation }) {

    return (
        <div className="column ">
            <div className="card mb-5">
                    <div className='columns'>
                        <div className='column is-flex is-align-items-center is-justify-content-center'>
                            <figure className="image is-128x128 ">
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder" />
                            </figure>
                        </div>
                        <div className='column has-text-left is-three-quarters has-background-info'>
                            <p className='title is-size-4 has-text-primary'>Title: {donation.title}</p>
                            <p className='subtitle is-size-6 has-text-dark pt-4'>Category: {donation.category}</p>
                            <p className='subtitle is-size-6 has-text-dark'>Description: {donation.description}</p>
                            <p className='subtitle is-size-6 has-text-dark'>User: {donation.user}</p>
                            <p className='subtitle is-size-6 has-text-dark'>Distance: {donation.distance}</p>
                        </div>
                        <SingleDonation />
                    </div>

            </div>
        </div>
    )
}