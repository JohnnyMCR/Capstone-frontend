import React from 'react';
import backgroundImage from './alberto-casetta-REKXJ7JhwiI-unsplash.jpg';
import Sam from "./Sam.jpeg"
import Johnny from "./Johnny.jpg"
import Angel from "./Angel.jpg"
import Max from "./Max.jpg"
// import SignUp from "../Components/SignUp"

export default function About() {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div>
      <section className="hero is-large" style={heroStyle}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-2 has-text-white"><strong>Where Care Comes Full Circle</strong></h1>
          </div>
        </div>
      </section>


      <section className="section">
        <div className="container has-text-centered">
          <h2 className="title is-2 has-text-primary">Our Mission</h2>
          <div className="columns is-centered">
            <div className="column is-four-fifth has-text-centered">
              
              <p className='content is-medium is-italic has-text-dark'>
              At CareVillage, our mission is to empower parents and caregivers on their unique parenting journeys while fostering a compassionate and supportive community. We provide a platform that seamlessly connects individuals with diverse parenting methods and offers a dedicated space for the generosity of giving to children in need. We believe in the power of knowledge-sharing and collaboration among parents, grandparents, guardians, and loved ones. 
              </p>

              <p className='content is-medium is-italic has-text-dark'>
              Our forums serve as a welcoming hub where you can explore and discuss a wide range of parenting approaches, from gentle parenting to positive discipline, and everything in between. Beyond connecting parents, CareVillage also embodies the spirit of giving. 
              </p>

              <p className='content is-medium is-italic has-text-dark'>
              Our dedicated donation section is a place where users can make a difference in the lives of children. Whether it's providing essential items, toys, or educational resources, we encourage our community to come together and support families in need. Together, we can create a brighter future for every child.
              </p>

              <p className='content is-medium is-italic has-text-danger'>
              Join us in our mission to make parenting a more informed, inclusive, and caring experience. Together, we can build a world where every child thrives, and every parent feels empowered and supported.
              </p>

            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container has-text-centered">
          <h2 className="title is-2 has-text-primary">Meet The Team</h2>

          <div className="columns">
            <div className="column is-half">
              <div className="card">
                <div className="card-content">
                  <h1 className='subtitle is-3 is-primary has-text-primary has-background-warning'>Samuel A.</h1>
                  <figure className='image is-flex is-justify-content-center'>
                  <img src={Sam} alt="Sam-img" className='is-rounded' style={{ width: '300px', height: '300px' }} ></img>
                  </figure>
                  <br></br>
                  <span class="icon is-large has-text-primary">
                    <i class="fab fa-github"></i>
                  </span>

                  <a className="git title is-5 has-text-link" href='https://github.com/SamuelBAlba'>Github</a>
                  <span class="icon is-large has-text-primary">
                  <i class="fab fa-linkedin"></i>
                  </span>

                  <a className="linked title is-5 has-text-link" href="https://www.linkedin.com/in/samuelalba/"> LinkedIn </a>
                </div>
              </div>
            </div>

            <div className="column is-half">
              <div className="card">
                <div className="card-content">
                  <h1 className='subtitle is-3 is-primary has-text-primary has-background-warning'> Johnny C. </h1>
                  <figure className='image is-flex is-justify-content-center'>
                  <img src={Johnny} alt="Johnny-img" className='is-rounded' style={{ width: '300px', height: '300px' }} ></img>
                  </figure>
                  <br></br>
                  <span class="icon is-large has-text-primary">
                    <i class="fab fa-github"></i>
                  </span>
                  <a className="git title is-5 has-text-link" href='https://github.com/JohnnyMCR'>Github</a>
                  <span class="icon is-large has-text-primary">
                  <i class="fab fa-linkedin"></i>
                  </span>
                  <a className="linked title is-5 has-text-link" href="https://www.linkedin.com/in/johnnycastillo/"> LinkedIn </a>
                </div>
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="column is-half">
              <div className="card">
                <div className="card-content">
                  <h1 className='subtitle is-3 is-primary has-text-primary has-background-warning'>Angel V.</h1>
                  <figure className='image is-flex is-justify-content-center'>
                  <img src={Angel} alt="Angel-img" className='is-rounded' style={{ width: '300px', height: '300px' }}></img>
                  </figure>
                  <br></br>
                  <p className='content is-medium is-italic has-text-dark'>
                  Hello, I’m Angel Villa, a dedicated software engineer currently thriving in the Pursuit Program.
                  When I’m not coding, you’ll find me embracing the freedom of the open road on my bike. Biking fuels my creativity.
                  While my skills have flourished at the Pursuit Program, I find myself yearning for a new adventure. My current role working in a warehouse has taught me the value of hard work, but I know there’s opportunities waiting for someone with my skills and enthusiasm.
                  </p>
                  <span class="icon is-large has-text-primary">
                    <i class="fab fa-github"></i>
                  </span>
                  <a className="git title is-5 has-text-link" href='https://github.com/ajvee'>Github</a>
                  <span class="icon is-large has-text-primary">
                  <i class="fab fa-linkedin"></i>
                  </span>
                  <a className="linked title is-5 has-text-link" href="https://www.linkedin.com/in/angeljvilla/"> LinkedIn </a>
                </div>
              </div>
            </div>

            <div className="column is-half">
              <div className="card">
                <div className="card-content">
                  <h1 className='subtitle is-3 is-primary has-text-primary has-background-warning'>Max W.</h1>
                  <figure className='image is-flex is-justify-content-center'>
                  <img src={Max} alt="Max-img" className='is-rounded' style={{ width: '300px', height: '300px' }}></img>
                  </figure>
                  <br></br>
                  <p className='content is-medium is-italic has-text-dark'>
                  "Hello, My name is Max. I have a Bachelors in Hospitality Management and I am transitioning my skills into tech. As a full stack web developer I would like to create platforms to help better ourselves, our community and our environment."
                  </p>
                  <br></br>
                  <span class="icon is-large has-text-primary">
                    <i class="fab fa-github"></i>
                  </span>
                  <a className="git title is-5 has-text-link" href="https://github.com/maxwattan"> Github </a>
                  <span class="icon is-large has-text-primary">
                  <i class="fab fa-linkedin"></i>
                  </span>
                  <a className="linked title is-5 has-text-link" href="https://www.linkedin.com/in/maxwattana/"> LinkedIn </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}