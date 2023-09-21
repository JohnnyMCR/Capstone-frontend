import React, { useState, useEffect } from 'react';
import axios from "axios";
import ForumModal from './ForumModal';
import ForumCard from './ForumCard';

const API = process.env.REACT_APP_API_URL;

export default function Forums() {
  const [forums, setForums] = useState([]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSortOption, setSelectedSortOption] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get(`${API}/forums`)
        .then((response) => {
            setForums(response.data);
        })
        .catch((e) => console.warn("catch", e));
}, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSortDropdown = () => {
    setIsSortDropdownOpen(!isSortDropdownOpen);
  };

  const selectItem = (item) => {
    setSelectedItem(item);
    setIsDropdownOpen(false);
  };

  const selectSortOption = (option) => {
    setSelectedSortOption(option);
    setIsSortDropdownOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

//   useEffect(() => {
//     axios
//       .get(`${API}/forums`)
//       .then((response) => {
//         console.log("Fetched forums:", response.data);
//         setForums(response.data);
//       })
//       .catch((err) => console.warn("Error fetching forums:", err));
//   }, []);

  return (
    <div>
      <div className='columns mt-1'>
        <div className='column is-one-fifth'>
          <div className="field is-grouped">
            <div className="control">
              <div className={`dropdown ${isDropdownOpen ? 'is-active' : ''}`}>
                <div className="dropdown-trigger">
                  <button
                    className="button"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu"
                    onClick={toggleDropdown}
                  >
                    <span>{selectedItem || 'Dropdown button'}</span>
                    <span className="icon is-small">
                      <i
                        className={`fas fa-angle-${isDropdownOpen ? 'up' : 'down'}`}
                        aria-hidden="true"
                      ></i>
                    </span>
                  </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <button
                      className={`dropdown-item ${selectedItem === 'Dropdown item' ? 'is-active' : ''}`}
                      onClick={() => selectItem('Dropdown item')}
                    >
                      Dropdown item
                    </button>
                    <button
                      className={`dropdown-item ${selectedItem === 'item' ? 'is-active' : ''}`}
                      onClick={() => selectItem('item')}
                    >
                      item
                    </button>
                    <button
                      className={`dropdown-item ${selectedItem === 'Active dropdown item' ? 'is-active' : ''}`}
                      onClick={() => selectItem('Active dropdown item')}
                    >
                      Active dropdown item
                    </button>
                    <button
                      className={`dropdown-item ${selectedItem === 'Other dropdown item' ? 'is-active' : ''}`}
                      onClick={() => selectItem('Other dropdown item')}
                    >
                      Other dropdown item
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="control">
              <div className={`dropdown ${isSortDropdownOpen ? 'is-active' : ''}`}>
                <div className="dropdown-trigger">
                  <button
                    className="button"
                    aria-haspopup="true"
                    aria-controls="sort-dropdown-menu"
                    onClick={toggleSortDropdown}
                  >
                    <span>Sort: {selectedSortOption}</span>
                    <span className="icon is-small">
                      <i
                        className={`fas fa-angle-${isSortDropdownOpen ? 'up' : 'down'}`}
                        aria-hidden="true"
                      ></i>
                    </span>
                  </button>
                </div>
                <div className="dropdown-menu" id="sort-dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <button
                      className={`dropdown-item ${selectedSortOption === 'Most Recent' ? 'is-active' : ''}`}
                      onClick={() => selectSortOption('Most Recent')}
                    >
                      Most Recent
                    </button>
                    <button
                      className={`dropdown-item ${selectedSortOption === 'Most Popular' ? 'is-active' : ''}`}
                      onClick={() => selectSortOption('Most Popular')}
                    >
                      Most Popular
                    </button>
                    <button
                      className={`dropdown-item ${selectedSortOption === 'All' ? 'is-active' : ''}`}
                      onClick={() => selectSortOption('All')}
                    >
                      All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='column'>
          <div className="control" style={{ textAlign: 'right', marginRight: '20px' }}>
            <button className="button is-primary" onClick={openModal}>
              Post +
            </button>
          </div>
        </div>
        <ForumModal isOpen={isModalOpen} onClose={closeModal}/>
      </div>
      <div className="columns">
        <div className='column is-three-quarters'>
          {forums.map((forum) => {
            return <ForumCard key={forum.id} forum={forum} />;
          })}
        </div>
        <div className="column is-one-quarter">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
          </ul>
        </div>
      </div>
    </div>
  );
}









//   const [selectedCategory, setSelectedCategory] = useState(“”);


//   
//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };



//   const filteredForums = selectedCategory
//     ? forums.filter((forum) => forum.category === selectedCategory)
//     : forums;



//   return (
//     <div className=“Forums”>
//       <CategoryFilter
//         categories={Array.from(new Set(forums.map((forum) => forum.category)))}
//         selectedCategory={selectedCategory}
//         onCategoryChange={handleCategoryChange}
//       />

//       <table>
//         <thead>
//           <tr>
//             <th className=“title”>Title</th>
//             <th className=“category”>Category</th>
//             <th className=“date”>Date</th>
//             <th className=“content”>Content</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredForums.map((forum) => {
//             return <Forum key={forum.id} forum={forum} />;
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default Forums;import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Forum from "./Forum";
// import CategoryFilter from "./CategoryFilter"; 

// const API = process.env.REACT_APP_API_URL;

// function Forums() {
//   const [forums, setForums] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(""); 
//   useEffect(() => {
//     axios
//       .get(`${API}/forums`)
//       .then((response) => {
//         console.log("Fetched forums:", response.data);
//         setForums(response.data);
//       })
//       .catch((err) => console.warn("Error fetching forums:", err));
//   }, []);

  
//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

  
//   const filteredForums = selectedCategory
//     ? forums.filter((forum) => forum.category === selectedCategory)
//     : forums;

//   return (
//     <div className="Forums">
//       <CategoryFilter
//         categories={Array.from(new Set(forums.map((forum) => forum.category)))}
//         selectedCategory={selectedCategory}
//         onCategoryChange={handleCategoryChange}
//       />

//       <table>
//         <thead>
//           <tr>
//             <th className="title">Title</th>
//             <th className="category">Category</th>
//             <th className="date">Date</th>
//             <th className="content">Content</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredForums.map((forum) => {
//             return <Forum key={forum.id} forum={forum} />;
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Forums;
