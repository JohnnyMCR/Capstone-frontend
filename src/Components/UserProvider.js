import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;


const UserDataContext = createContext();

export const useUserData = () => useContext(UserDataContext);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${API}/profiles/users`) 
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const fetchUserById = async (id) => {
    try {
      const response = await axios.get(`${API}/profiles/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching user with ID ${id}:`, error);
      return null;
    }
  };


  return (
    <UserDataContext.Provider value={{users, fetchUserById}}>
      {children}
    </UserDataContext.Provider>
  );
};
