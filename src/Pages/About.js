import React from "react";
import backgroundImage from "./alberto-casetta-REKXJ7JhwiI-unsplash.jpg";
import Sam from "./Sam.jpeg";
import Johnny from "./Johnny.jpg";
import Angel from "./Angel.jpg";
import Max from "./Max.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import SignUp from "../Components/SignUp";

export default function About() {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div>
      <section className="hero is-large" style={heroStyle}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-2 has-text-white is-italic is-overlay">
              "Where Care Comes Full Circle"
            </h1>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="title is-2 has-text-primary has-text-left">
            Our mission
          </h2>
          <div className="columns is-centered">
            <div className="column is-four-fifth has-text-centered">
              <p className="content has-text-left is-medium is-italic has-text-grey pb-6">
                At CareVillage, our mission is to empower parents and caregivers
                on their unique parenting journeys while fostering a
                compassionate and supportive community. We provide a platform
                that seamlessly connects individuals with diverse parenting
                methods and offers a dedicated space for the generosity of
                giving to children in need. We believe in the power of
                knowledge-sharing and collaboration among parents, grandparents,
                guardians, and loved ones.
              </p>
              <hr className="is-divider" />

              <h2 className="title is-2 has-text-primary has-text-left pt-6">
                What we offer
              </h2>
              <h3 className="title is-4 has-text-primary has-text-left pt-4">
                {" "}
                <FontAwesomeIcon
                  className="pr-4"
                  icon={faMessage}
                  bounce
                  size="2xl"
                />
                Forums{" "}
              </h3>

              <p className="content is-medium is-italic has-text-dark has-text-left">
                Our forums serve as a welcoming hub where you can explore and
                discuss a wide range of parenting approaches, from gentle
                parenting to positive discipline, and everything in between.
                Beyond connecting parents, CareVillage also embodies the spirit
                of giving.
              </p>

              <h3 className="title is-4 has-text-primary has-text-left pt-4">
                {" "}
                <FontAwesomeIcon
                  className="pr-4"
                  icon={faHeart}
                  beat
                  size="2xl"
                />
                Donations{" "}
              </h3>
              <p className="content is-medium is-italic has-text-dark pb-6">
                Our dedicated donation section is a place where users can make a
                difference in the lives of children. Whether it's providing
                essential items, toys, or educational resources, we encourage
                our community to come together and support families in need.
                Together, we can create a brighter future for every child.
              </p>
              <hr className="is-divider" />
              <div className="has-background-info pt-6 mt-6">
                <h1 className="title is-2 has-text-primary has-text-weight-bold">
                  {" "}
                  Join us
                </h1>
                <p className="content is-medium is-italic has-text-dark ">
                  Our mission to make parenting a more informed, inclusive, and
                  caring experience. Together, we can build a world where every
                  child thrives, and every parent feels empowered and supported.
                </p>
                <SignUp />
              </div>
            </div>
          </div>
          <hr className="is-divider" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="title is-1 has-text-primary has-text-left">
            The Team
          </h2>

          <div className="columns">
            <div className="column is-one-half">
              <div className="column">
                <figure className="column image">
                  <img
                    src={Sam}
                    alt="Sam-img"
                    className="column is-rounded is-one-quarter is-justify-content-center"
                  ></img>
                </figure>

                <div className="column has-text-left">
                  <FontAwesomeIcon
                    className="mr-2 has-text-warning has-text-left"
                    icon={faGithub}
                    flip
                    size="2xl"
                  />
                  <a
                    className="git title is-5 has-text-link"
                    href="https://github.com/SamuelBAlba"
                  >
                    Github
                  </a>
                  <div></div>
                  <FontAwesomeIcon
                    className="mr-2 mt-3 has-text-primary"
                    icon={faLinkedin}
                    beatFade
                    size="2xl"
                  />

                  <a
                    className="linked title is-5 has-text-link"
                    href="https://www.linkedin.com/in/samuelalba/"
                  >
                    {" "}
                    LinkedIn{" "}
                  </a>
                </div>
                <h1 className="title is-3 is-primary has-text-primary has-text-center has-text-weight-bold">
                  Samuel A.
                </h1>
                <p className="content is-medium is-italic has-text-dark hast-text-right">
                  Hello, I'm Samuel Alba, the product owner behind CareVillage.
                  As a dedicated problem solver and technology enthusiast, I
                  embarked on a mission to craft an app that simplifies and
                  elevates daily life. My unwavering belief is that technology
                  should be a seamless part of our lives, enhancing our
                  experiences.
                </p>
              </div>
            </div>

            {/* <div className="card pb-1 has-background-info">
                <div className="card-content mb-6 pb-1">
                  <h1 className="subtitle is-3 is-primary has-text-primary has-background-warning">
                    Samuel A.
                  </h1>
                  <figure className="image is-flex is-justify-content-center">
                    <img
                      src={Sam}
                      alt="Sam-img"
                      className="is-rounded"
                      style={{ width: "300px", height: "300px" }}
                    ></img>
                  </figure>
                  <br></br>
                  <p className="content is-medium is-italic has-text-dark">
                    Hello, I'm Samuel Alba, the product owner behind
                    CareVillage. As a dedicated problem solver and technology
                    enthusiast, I embarked on a mission to craft an app that
                    simplifies and elevates daily life. My unwavering belief is
                    that technology should be a seamless part of our lives,
                    enhancing our experiences.
                  </p>
                  <FontAwesomeIcon className="mr-2 has-text-warning" icon={faGithub} flip size="2xl"/>

                  <a
                    className="git title is-5 has-text-link"
                    href="https://github.com/SamuelBAlba"
                  >
                    Github
                  </a>
                  <FontAwesomeIcon className="ml-6 mr-2 has-text-primary" icon={faLinkedin} beatFade size="2xl"/>

                  <a
                    className="linked title is-5 has-text-link"
                    href="https://www.linkedin.com/in/samuelalba/"
                  >
                    {" "}
                    LinkedIn{" "}
                  </a>
                </div>
              </div> */}

            <div className="column is-one-half">
              <div className="column">
                <figure className="column image">
                  <img
                    src={Johnny}
                    alt="Johnny-img"
                    className="column is-rounded is-one-quarter is-justify-content-center"
                  ></img>
                </figure>

                <div className="column has-text-left">
                  <FontAwesomeIcon
                    className="mr-2 has-text-warning has-text-left"
                    icon={faGithub}
                    flip
                    size="2xl"
                  />
                  <a
                    className="git title is-5 has-text-link"
                    href="https://github.com/JohnnyMCR"
                  >
                    Github
                  </a>
                  <div></div>
                  <FontAwesomeIcon
                    className="mr-2 mt-3 has-text-primary"
                    icon={faLinkedin}
                    beatFade
                    size="2xl"
                  />

                  <a
                    className="linked title is-5 has-text-link"
                    href="https://www.linkedin.com/in/johnnycastillo/"
                  >
                    {" "}
                    LinkedIn{" "}
                  </a>
                </div>
                <h1 className="title is-3 is-primary has-text-primary has-text-center has-text-weight-bold">
                  Johnny C.
                </h1>
                <p className="content is-medium is-italic has-text-dark hast-text-right">
                  Hello! My name is Johnny Castillo and I'm a software engineer
                  with experience in multiple fields ranging from marketing,
                  finance, nonprofit and early childhood development. I'm
                  passionate about learning new and adventurous ways of seeking
                  knowledge and implementing them. The pursuit of knowledge led
                  me here and I have gained an invaluable amount of it with this
                  program.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="column is-half">
              <div className="card">
                <div className="card-content has-background-info">
                  <h1 className="subtitle is-3 is-primary has-text-primary has-background-warning">
                    {" "}
                    Johnny C.{" "}
                  </h1>
                  <figure className="image is-flex is-justify-content-center">
                    <img
                      src={Johnny}
                      alt="Johnny-img"
                      className="is-rounded"
                      style={{ width: "300px", height: "300px" }}
                    ></img>
                  </figure>
                  <br></br>
                  <p className="content is-medium is-italic has-text-dark">
                    Hello! My name is Johnny Castillo and I'm a software
                    engineer with experience in multiple fields ranging from
                    marketing, finance, nonprofit and early childhood
                    development. I'm passionate about learning new and
                    adventurous ways of seeking knowledge and implementing them.
                    The pursuit of knowledge led me here and I have gained an
                    invaluable amount of it with this program.
                  </p>
                  <FontAwesomeIcon
                    className="mr-2 has-text-warning"
                    icon={faGithub}
                    flip
                    size="2xl"
                  />
                  <a
                    className="git title is-5 has-text-link"
                    href="https://github.com/JohnnyMCR"
                  >
                    Github
                  </a>
                  <FontAwesomeIcon
                    className="ml-6 mr-2 has-text-primary"
                    icon={faLinkedin}
                    beatFade
                    size="2xl"
                  />
                  <a
                    className="linked title is-5 has-text-link"
                    href="https://www.linkedin.com/in/johnnycastillo/"
                  >
                    {" "}
                    LinkedIn{" "}
                  </a>
                </div>
              </div>
            </div> */}

          <div className="columns">
            <div className="column is-one-half">
              <div className="column">
                <figure className="column image">
                  <img
                    src={Angel}
                    alt="Angel-img"
                    className="column is-rounded is-one-quarter is-justify-content-center"
                  ></img>
                </figure>

                <div className="column has-text-left">
                  <FontAwesomeIcon
                    className="mr-2 has-text-warning has-text-left"
                    icon={faGithub}
                    flip
                    size="2xl"
                  />
                  <a
                    className="git title is-5 has-text-link"
                    href="https://github.com/ajvee"
                  >
                    Github
                  </a>
                  <div></div>
                  <FontAwesomeIcon
                    className="mr-2 mt-3 has-text-primary"
                    icon={faLinkedin}
                    beatFade
                    size="2xl"
                  />

                  <a
                    className="linked title is-5 has-text-link"
                    href="https://www.linkedin.com/in/angeljvilla/"
                  >
                    {" "}
                    LinkedIn{" "}
                  </a>
                </div>
                <h1 className="title is-3 is-primary has-text-primary has-text-center has-text-weight-bold">
                  Angel V.
                </h1>
                <p className="content is-medium is-italic has-text-dark hast-text-right">
                  Hello, I'm Angel Villa, a dedicated software engineer
                  currently thriving in the Pursuit Program. When I'm not
                  coding, you'll find me embracing the freedom of the open road
                  on my bike. Biking fuels my creativity. While my skills have
                  flourished at the Pursuit Program, I find myself yearning for
                  a new adventure. My current role working in a warehouse has
                  taught me the value of hard work, but I know there's
                  opportunities waiting for someone with my skills and
                  enthusiasm.
                </p>
              </div>
            </div>

            {/* <div className="column is-half">
              <div className="card">
                <div className="card-content has-background-info">
                  <h1 className="subtitle is-3 is-primary has-text-primary has-background-warning">
                    Angel V.
                  </h1>
                  <figure className="image is-flex is-justify-content-center">
                    <img
                      src={Angel}
                      alt="Angel-img"
                      className="is-rounded"
                      style={{ width: "300px", height: "300px" }}
                    ></img>
                  </figure>
                  <br></br>
                  <p className="content is-medium is-italic has-text-dark">
                    Hello, I'm Angel Villa, a dedicated software engineer
                    currently thriving in the Pursuit Program. When I'm not
                    coding, you'll find me embracing the freedom of the open
                    road on my bike. Biking fuels my creativity. While my skills
                    have flourished at the Pursuit Program, I find myself
                    yearning for a new adventure. My current role working in a
                    warehouse has taught me the value of hard work, but I know
                    there's opportunities waiting for someone with my skills and
                    enthusiasm.
                  </p>
                  <FontAwesomeIcon
                    className="mr-2 has-text-warning"
                    icon={faGithub}
                    flip
                    size="2xl"
                  />
                  <a
                    className="git title is-5 has-text-link"
                    href="https://github.com/ajvee"
                  >
                    Github
                  </a>
                  <FontAwesomeIcon
                    className="ml-6 mr-2 has-text-primary"
                    icon={faLinkedin}
                    beatFade
                    size="2xl"
                  />
                  <a
                    className="linked title is-5 has-text-link"
                    href="https://www.linkedin.com/in/angeljvilla/"
                  >
                    {" "}
                    LinkedIn{" "}
                  </a>
                </div>
              </div> */}

            <div className="column is-one-half">
              <div className="column">
                <figure className="column image">
                  <img
                    src={Max}
                    alt="Max-img"
                    className="column is-rounded is-one-quarter is-justify-content-center"
                  ></img>
                </figure>

                <div className="column has-text-left">
                  <FontAwesomeIcon
                    className="mr-2 has-text-warning has-text-left"
                    icon={faGithub}
                    flip
                    size="2xl"
                  />
                  <a
                    className="git title is-5 has-text-link"
                    href="https://github.com/maxwattan"
                  >
                    Github
                  </a>
                  <div></div>
                  <FontAwesomeIcon
                    className="mr-2 mt-3 has-text-primary"
                    icon={faLinkedin}
                    beatFade
                    size="2xl"
                  />

                  <a
                    className="linked title is-5 has-text-link"
                    href="https://www.linkedin.com/in/maxwattana/"
                  >
                    {" "}
                    LinkedIn{" "}
                  </a>
                </div>
                <h1 className="title is-3 is-primary has-text-primary has-text-center has-text-weight-bold">
                  Max W.
                </h1>
                <p className="content is-medium is-italic has-text-dark hast-text-right">
                  "Hello, My name is Max. I have a Bachelors in Hospitality
                  Management and I am transitioning my skills into tech. As a
                  full stack web developer I would like to create platforms to
                  help better ourselves, our community and our environment."
                </p>
              </div>
            </div>
            {/* <div className="column is-half">
              <div className="card mb-6 pb-5 has-background-info">
                <div className="card-content mb-6 pb-6 has-background-info">
                  <h1 className="subtitle is-3 is-primary has-text-primary has-background-warning">
                    Max W.
                  </h1>
                  <figure className="image is-flex is-justify-content-center">
                    <img
                      src={Max}
                      alt="Max-img"
                      className="is-rounded"
                      style={{ width: "300px", height: "300px" }}
                    ></img>
                  </figure>
                  <br></br>
                  <p className="content is-medium is-italic has-text-dark">
                    "Hello, My name is Max. I have a Bachelors in Hospitality
                    Management and I am transitioning my skills into tech. As a
                    full stack web developer I would like to create platforms to
                    help better ourselves, our community and our environment."
                  </p>
                  <br></br>
                  <FontAwesomeIcon
                    className="mr-2 has-text-warning"
                    icon={faGithub}
                    flip
                    size="2xl"
                  />
                  <a
                    className="git title is-5 has-text-link"
                    href="https://github.com/maxwattan"
                  >
                    {" "}
                    Github{" "}
                  </a>
                  <FontAwesomeIcon
                    className="ml-6 mr-2 has-text-primary"
                    icon={faLinkedin}
                    beatFade
                    size="2xl"
                  />
                  <a
                    className="linked title is-5 has-text-link"
                    href="https://www.linkedin.com/in/maxwattana/"
                  >
                    {" "}
                    LinkedIn{" "}
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
