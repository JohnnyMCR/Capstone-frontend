import React, { useContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LogIn from './LogIn';
import { AuthContext } from './AuthContext';

const API = process.env.REACT_APP_API_URL;

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    zipcode: '',
  });

  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const {setCurrentUser} = useContext(AuthContext)

  const handleSignup = async () => {
    const auth = getAuth();

    try {
      const { email, password, username, zipcode } = formData;

      if (!email || !password || !username) {
        setError("Please fill in all fields.");
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password, zipcode);
      console.log('User Credential:', userCredential);

      await updateProfile(auth.currentUser, { displayName: username });

      const response = await axios.post(`${API}/users`, formData);
      console.log(response);
      console.log(response.status);
      
      if (response.status === 200) {
        setCurrentUser(response.data)
        setError("");
        navigate("/dashboard", { replace: true });
        setIsModalOpen(false);

      } else {
        setError("Failed to sign up. Please try again.");
      }
    } catch (error) {
      console.error('Sign-up error:', error);
      setError(error.message);
    }

  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <button className="button  is-primary is-rounded has-text-weight-bold ml-2" type="button" onClick={openModal}>
      Sign Up
      </button>
      {isModalOpen && (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-content has-background-info py-6 px-6">
            <div className='columns'>

            <h1 className="modal-card-title title is-3 has-text-primary has-text-left py-5 px-6 mx-6"> Sign Up For Care Village </h1>
            <button
               className="delete is-medium mb-5 has-text-right"
                aria-label="close"
                 onClick={closeModal}
               ></button>
            </div>
              
            <form>
              {['Email', 'Password', 'Username', 'Zipcode'].map((field) => (
                <div className="field" key={field}>
                  <label className="label is-large has-text-danger mt-5">
                    {/* {field === 'Zipcode' ? 'Zipcode' : field} */}
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={field === 'Password' ? 'password' : 'text'}
                      placeholder={field === 'Zipcode' ? 'Zipcode' : field}
                      name={field.toLowerCase()}
                      value={formData[field.toLowerCase()]}
                      onChange={handleChange}
                   />
                  </div>
                </div>
              ))}

              
                <div className="columns">
                  <div className="column has-text-left">

                  <button
                    className="button is-medium mt-4  is-outlined is-primary is-rounded has-text-primary has-text-weight-bold	"
                    aria-label="close"
                    onClick={closeModal}
                    style={{
                      boxShadow: "none",
                      backgroundColor: "white",
                      color: "inherit",
                    }}
                  >
                    Cancel
                  </button>
                  </div>
                  
                  <div className="column has-text-right">

                  <button
                    className="button is-primary is-rounded is-medium mt-4 ml-5 has-text-weight-bold"
                    type="button"
                    onClick={() => handleSignup()}
                  >
                    Sign Up
                  </button>
                  </div>
                </div>

                <div>
              <p className="content is-medium has-text-primary mt-5 ">
                Already have an account? <LogIn />
              </p>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              </div>
              </form>
            <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
            </div>
            </div>
          )}
        </>
      );
    };

    export default SignUp;





