import React, { useState, useEffect } from "react";
import axios from "axios";
import ForumModal from "./ForumModal";
import ForumCard from "./ForumCard";
import ArticleCard from "./ArticleCard";

const API = process.env.REACT_APP_API_URL;

export default function Forums({ user }) {
  const [forums, setForums] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedSortOption, setSelectedSortOption] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [curUser, setCurUser] = useState(null);

  useEffect(() => {
    axios
      .get(`${API}/forums`)
      .then((response) => {
        setForums(response.data);
        console.log("Fetched forums:", response.data);
      })
      .catch((e) => console.warn("catch", e));
  }, [isModalOpen]);

  useEffect(() => {
    if (user) {
      axios
        .get(`${API}/users`)
        .then((response) => {
          console.log('API Response:', response.data);
          response.data.forEach(element => {
            if (element.username === user.displayName) {
              setCurUser(element)
            }
            
          });
        })
        .catch((error) => {
          console.error('Error fetching username:', error);
          setCurUser('Error fetching username');
        });
    } else {
      setCurUser('User ID not defined');
    }
  },[user]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFilterSelect = (filterOption) => {
    setSelectedFilter(filterOption);
  };

  const handleSortSelect = (sortOption) => {
    setSelectedSortOption(sortOption);

  };
  return (
    <div>
      <div className="columns mt-1">
        <div className="column is-one-fifth ml-4">
          <div className="field is-grouped">

            {/* 1st drop */}
            <div className="control">
              <div className="dropdown is-hoverable">
                <div className="dropdown-trigger">
                  <button className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                    <span>Filter: {selectedFilter}</span>
                    <span className="icon is-small">
                      <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                  <div className="dropdown-content">
                    <div className="dropdown-item" onClick={() => handleFilterSelect("New Born")}>
                      New Born
                      </div>
                    <div className="dropdown-item" onClick={() => handleFilterSelect("Toddler")}>
                      Toddler
                      </div>
                    <div className="dropdown-item" onClick={() => handleFilterSelect("Child")}>
                      Child
                      </div>
                    <div className="dropdown-item" onClick={() => handleFilterSelect("Adolescent")}>
                      Adolescent
                      </div>
                    <div className="dropdown-item" onClick={() => handleFilterSelect("Other")}>
                      Other
                      </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 1st drop */}

            {/* 2nd drop */}
            <div className="control">
              <div className="dropdown is-hoverable">
                <div className="dropdown-trigger">
                  <button className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                    <span>Sort: {selectedSortOption}</span>
                    <span className="icon is-small">
                      <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                  <div className="dropdown-content">
                    <div className="dropdown-item" onClick={() => handleSortSelect("Most Recent")} >
                      Most Recent
                    </div>
                    <div className="dropdown-item" onClick={() => handleSortSelect("Most Popular")}>
                      Most Popular
                    </div>
                    <div className="dropdown-item" onClick={() => handleSortSelect("All")}>
                      All
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 2nd drop */}
          </div>

        </div>
        <div className="column">
          <div
            className="control"
            style={{ textAlign: "right", marginRight: "20px" }}
          >
            <button
              className="button is-medium is-rounded is-primary has-text-weight-bold"
              onClick={openModal}
            >
              Post +
            </button>
          </div>
        </div>
        <ForumModal
          isOpen={isModalOpen}
          onClose={closeModal}
          user={curUser}
          forums={forums}
          setForums={setForums}
        />
      </div>
      <div className="columns">
        <div className="column is-three-quarters">
          {forums.map((forum) => {
            return (
              <ForumCard
                key={`${forum.title}-${forum.id}`}
                forum={forum}
                user={curUser}
              />
            );
          })}
        </div>
        <div className="column is-one-quarter mb-6 mt-3">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          {/* <Articles /> */}
          <div className="card"></div>
        </div>
      </div>
    </div>
  );
}
