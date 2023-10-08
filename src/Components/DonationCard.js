import React from "react";
import ShowDonation from "./ShowDonation";
export default function DonationCard({ donation, user, }) {


    return (
        <div className="column ">
            <div className="card mb-5">
                    <div className='columns'>
                        <div className='column is-flex is-align-items-center is-justify-content-center'>
                            <figure className="image is-128x128 ">
                            <img src={donation.img || "https://bulma.io/images/placeholders/96x96.png"} alt="Donation" />
                            </figure>
                        </div>
                        <div className='column has-text-left is-three-quarters has-background-info'>
                            <p className='title is-size-4 has-text-primary'>Title: {donation.title}</p>
                            <p className='subtitle is-size-6 has-text-dark pt-4'>Category: {donation.category}</p>
                            <p className='subtitle is-size-6 has-text-dark'>Description: {donation.description}</p>
                            <div className="columns mb-3">

                                {/* <figure className=" image is-48x48 ml-2">
                                <img src="https://bulma.io/images/placeholders/48x48.png" alt="Placeholder" 
                                className="is-rounded"/>
                            </figure> */}
                            {/* <p className='column subtitle is-size-6 has-text-dark'>
                            User: {donation.user}</p> */}
                            </div>
                            {/* <p className='subtitle is-size-6 has-text-dark'>Distance: {donation.distance}</p> */}
                            <p className='subtitle is-size-6 has-text-dark'>Posted by: {donation.username}</p>
                        </div>
                        <ShowDonation user={user} donation_id={donation.id} donationDescription={donation.description}  />
                    </div>

            </div>
        </div>
    )
}