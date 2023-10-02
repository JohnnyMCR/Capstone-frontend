import React from 'react';
import backgroundImage from './CareVillageBanner.jpeg'
import SignUp from "../Components/SignUp"
import DONATIONS from "./DONATIONS.png"
import FORUMS from "./FORUMS.jpeg"
import { Link } from "react-router-dom";


function Home() {

  // css to make image the entire banner
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };


  return (
    <div>

      <section className="hero is-fullheight" style={heroStyle}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1 has-text-white is-italic is-overlay">"Where Care Comes Full Circle"</h1>
          </div>
        </div>
      </section>



      <h2 className="title is-2 has-text-primary mt-6 pt-6">What We Offer</h2>
      <p className='content is-medium is-italic column has-text-dark is-fouth-fifth'> At CareVillage, we are committed to providing a dynamic and inclusive platform designed to meet the diverse needs of parents, caregivers, and children. Our app offers a range of features and services to support and enrich your parenting journey:</p>

      <div className='block'>
        <div className='columns'>

          <div className='column is-half'>
            <figure className='image is-flex is-justify-content-center mt-6 pt-6'>
              <img src={FORUMS} alt="Sam-img" className='' style={{ width: '500px', height: '300px' }} ></img>
            </figure>
          </div>

          <div className='column is-half'>
            <p className='title has-text-primary mt-6 pt-6'> Village Forums:</p>
            <p className='content is-medium is-italic pt-3 mt-3 mr-6 has-text-dark'>
              Connect with a thriving community of parents, grandparents, guardians, and loved ones. Our forums are a safe and welcoming space to share experiences, seek advice, and engage in meaningful conversations about various parenting methods and challenges. Access a wealth of parenting resources, articles, and expert advice to help you make informed decisions and navigate the ups and downs of parenting.
            </p>
          </div>

        </div>
      </div>

      <div className='block'>
        <div className='columns'>

          <div className='column is-half'>
            <p className='title has-text-primary mt-6 pt-6'>Village Donations:</p>
            <p className='content is-medium is-italic pt-3 mt-3 ml-6 has-text-dark'>
              Make a positive impact on the lives of children in need. Our dedicated donation section allows you to give back to the community by contributing essential items, toys, books, and educational resources. Together, we can create a brighter future for every child.
            </p>
          </div>

          <div className='column is-half mt-6 pt-6'>
            <figure className='image is-flex is-justify-content-center'>
              <img src={DONATIONS} alt="Sam-img" className='' style={{ width: '500px', height: '300px' }} ></img>
            </figure>
          </div>
        </div>

        <div className='columns mt-6 pt-6'>
          <div className='column is-one-third has-background-info card'>
          <p className='title has-text-primary mt-3 pt-3'>Community:</p>
          <p className='content is-medium is-italic column has-text-dark is-full mb-6'>
           Content.</p>
          <button className='button is-primary is-rounded ml-2 has-text-weight-bold mb-3'> <Link
            to="/forums"
            className="title is-5 has-text-white  has-text-centered"
          >
            Forums/Articles
          </Link></button>
          </div>

          <div className='column is-one-third has-background-success card'>
          <p className='title has-text-primary mt-3 pt-3'>Join Us:</p>
          <p className='content is-medium is-italic column has-text-dark is-full mb-6 '>
            At CareVillage and experience the power of community, knowledge, and generosity. Together, we can build a supportive and caring environment where every parent and child can thrive.</p>
            <SignUp />
          </div>

          <div className='column is-one-third has-background-info card'>
          <p className='title has-text-primary mt-3 pt-3'>About Us:</p>
          <p className='content is-medium is-italic column has-text-dark is-full mb-6'>
            Content.</p>
            <button className='button is-primary is-rounded ml-2 has-text-weight-bold mb-3'> <Link
            to="/aboutus"
            className="title is-5 has-text-white  has-text-centered"
          >
            Meet The Team
          </Link></button>
          </div>
          {/* <p className='title has-text-primary'>Privacy and Security:</p>
          <p className='content is-medium is-italic column has-text-dark is-full'>
            Rest assured that your data and interactions are secure. We prioritize your privacy and safety, creating a space where you can share openly without worries.
          </p>

          <p className='title has-text-primary mt-3 pt-3'>Compatibility:</p>
          <p className='content is-medium is-italic column has-text-dark is-full'> Mobile App  Enjoy the convenience of our app on various devices, including smartphones and tablets, with a responsive and user-friendly design.</p>

          <p className='title has-text-primary mt-3 pt-3'>Suggestions:</p>
          <p className='content is-medium is-italic column has-text-dark is-full'> Feedback and  Provide feedback and suggestions to help us continuously improve the app. We value your input in shaping the future of CareVillage.</p> */}

        
        </div>
      </div>









      <section className="hero is-small is-info is-warning pb-3">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-3 has-text-primary">Join CareVillage</h1>
            <div className="container">
            <h1 className="title is-3 has-text-white is-italic mb-5">"Where Care Comes Full Circle"</h1>
          </div>
            <h2 className="title is-4 has-text-danger">Make a Donation!</h2>
            
            <button className='button is-primary is-rounded ml-2 has-text-weight-bold mb-3'> <Link
            to="/donations"
            className="title is-5 has-text-white has-text-centered"
          >
            Donations
          </Link></button>

            

          </div>
        </div>
      </section>
    </div>

  );
}

export default Home;