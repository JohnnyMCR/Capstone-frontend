import React from 'react';
import backgroundImage from './CareVillageBanner.jpeg'
import { Link } from 'react-router-dom';
import SignUp from "../Components/SignUp"
import DONATIONS from "./DONATIONS.png"
import FORUMS from "./FORUMS.jpeg"

function Home() {

  // css to make image the entire banner
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const roundedImagePlaceholderStyle = {
    borderRadius: '5%',
    width: '400px', 
    height: '250px', 
    backgroundColor: 'gray', 
    // marginRight: '10px', 
  };

  return (
    <div>

    <section className="hero is-fullheight" style={heroStyle}>
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1 has-text-white">Where Care Comes Full Circle</h1>
        </div>
      </div>
    </section>



      <h2 className="title is-2 has-text-primary mt-6">What We Offer</h2>

      <div className='block'>
        <div className='columns'>

          <div className='column is-half'>
              <figure className='image is-flex is-justify-content-center'>
              <img src={FORUMS} alt="Sam-img" className='' style={{ width: '500px', height: '300px' }} ></img>
              </figure>
          </div>

          <div className='column is-half'>
              <p className='content is-medium is-italic pt-6 mt-6'>
              Text for the first image goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ante nec metus scelerisque commodo. Text for the first image goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ante nec metus scelerisque commodo.
              </p>
          </div>

        </div>
      </div>

      <div className='block'>
        <div className='columns'>

        <div className='column is-half'>
              <p className='content is-medium is-italic pt-6 mt-6'>
              Text for the first image goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ante nec metus scelerisque commodo. Text for the first image goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ante nec metus scelerisque commodo. Text for the first image goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
          </div>

          <div className='column is-half'>
              <figure className='image is-flex is-justify-content-center'>
              <img src={DONATIONS} alt="Sam-img" className='' style={{ width: '500px', height: '300px' }} ></img>
              </figure>
          </div>

        </div>
      </div>

      


        


        

    <section className="hero is-small is-info is-warning">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-3 has-text-primary">Join CareVillage</h1>
            <h2 className="title is-4 has-text-danger">Make a Donation!</h2>
            <button href='/signup' className="button is-primary mx-2 is-rounded" id="signup" >
            <SignUp />
            </button>
          
          </div>
        </div>
      </section>
  </div>

  );
}

export default Home;