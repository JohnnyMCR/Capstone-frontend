import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import Donation from "../Components/Donation";
// import Donation from "./Donations";

const API = process.env.REACT_APP_API_URL;


export default function ShowDonation( { user }) {
  const [donation, setDonation] = useState([]);
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //make api call to backend for a SINGLE donation id

  useEffect(() => {
        axios
          .get(`${API}/donations/${id}`)
          .then((response) => {
            setDonation(response.data);
          })
          .catch((error) => {
            console.error("Error fetching forum details:", error);
          });
      }, [id]);

  //         <div className="SingleDonation">
  //             <h2>Single Donation</h2>
  //             {donation ? (
  //                 <Donation
  //                     donation={donation}
  //                     onEdit={(editedDonation) => {
  //                     }}
  //                     onDelete={(deletedDonation) => {
  //                     }}
  //                 />
  //             ) : (
  //                 <p>No donation selected.</p>
  //             )}
  //         </div>
  //     );
  // }

  return (
    // <div>
    <div className="column control is-flex is-justify-content-center is-align-items-center">
      {/* <div className="control " > */}
      <button
        className="button is-medium is-rounded is-primary has-text-weight-bold"
        onClick={openModal}
      >
        Show More
      </button>
      {/* </div> */}
      {/* </div> */}

      <div className={`modal ${isModalOpen ? "is-active" : ""}`}>
        <div className="modal-background " onClick={closeModal}></div>
        <div className="modal-card">
          <section className="modal-card-body py-6 px-6 has-background-info">
            <div className="columns">
              <h1 className="modal-card-title title is-2 has-text-primary has-text-left">
                Donation Details
              </h1>
              <button
                className="delete"
                aria-label="close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="columns">
              <div className="column">
                <figure className="image is-96x128">
                  <img
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt="donation"
                  />
                </figure>
              </div>
              <div className="column has-text-left is-three-fifths">
                <p className="content is-size-4 is-large has-text-primary has-text-weight-bold">
                  Title:{donation.title}
                </p>
                <p className="content is-size-6 is-large has-text-dark">
                  User:{donation.username}
                </p>
                <p className="content is-size-6 is-large has-text-dark">
                  Description:{donation.description}
                </p>
                <p className="content is-size-6 is-large has-text-dark">
                  Category:{donation.category}
                </p>
              </div>
            </div>
            <button className="button has-background-primary is-rounded has-text-white has-text-weight-bold" onClick={closeModal}>
              Message "The Giver/Donor"
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}