import React, { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import axios from 'axios';


export const AuthContext = createContext(null);

// export const useAuth = () => useContext(AuthContext);
export const AuthProvider = (props) => {


  const [currentUser, setCurrentUser] = useState(null);
  const auth = getAuth();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user)
      if (user) {
        axios
        .get(`${API}/users`)
        .then((response) => {
          console.log('API Response:', response.data);
          response.data.forEach(element => {
            if (element.email === user.email) {
              setCurrentUser(element)
            }
            
          });
        })
        .catch((error) => {
          console.error('Error fetching username:', error);
          setCurrentUser('Error fetching username');
        });
      } else {
        setCurrentUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [auth, API]);

  return (
    <AuthContext.Provider value={{ currentUser, auth, setCurrentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

