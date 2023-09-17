import React, { useState } from 'react';

export default function SingleDonation() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //make api call to backend for a SINGLE donation id


  return (
    <div>
      <div className='column has-text-right'>
        <div className="control" >
          <button className="button is-primary mt-6" onClick={openModal}>
            Show
          </button>
        </div>
      </div>

      <div className={`modal ${isModalOpen ? 'is-active' : ''}`}>
        <div className="modal-background" onClick={closeModal}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Donation Details</p>
            <button className="delete" aria-label="close" onClick={closeModal}></button>
          </header>
          <section className="modal-card-body">
            <div className="columns">
              <div className="column is-2">
                <figure className="image is-128x128">
                  <img alt="Donation" />
                </figure>
              </div>
              <div className="column has-text-left is-three-fifths">
                <p className="is-size-4">kmmkasx</p>
                <p className="is-size-6">wdwdkmwkmdw</p>
                <p className="is-size-6">qsmkqskmsmqk</p>
                <p className="is-size-6">User:sss</p>
                <p className="is-size-6">Distance:</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}