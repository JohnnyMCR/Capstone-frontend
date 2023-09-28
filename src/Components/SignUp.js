import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LogIn from './LogIn';

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

  const handleSignup = async () => {
    const auth = getAuth();

    try {
      const { email, password, username, zipcode } = formData;

      if (!email || !password || !username) {
        setError('Please fill in all fields.');
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password, zipcode);
      console.log('User Credential:', userCredential);

      await updateProfile(auth.currentUser, { displayName: username });

      

      const response = await axios.post(`${API}/profiles`, formData);
      console.log(response);
      console.log(response.status);
      
      if (response.status === 200) {
        setError('');
        navigate('/', { replace: true });
        setIsModalOpen(false);

      } else {
        setError('Failed to sign up. Please try again.');
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
      <button className="button is-primary is-small" type="button" onClick={openModal}>
        Sign Up
      </button>

      {isModalOpen && (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-content has-background-info py-5 px-5">
            <h3 className="title is-1 has-text-primary"> Join CareVillage </h3>
            <form>
              {['Email', 'Password', 'Username', 'Zipcode'].map((field) => (
                <div className="field" key={field}>
                  <label className="label is-large has-text-danger">
                    {field === 'Zipcode' ? 'Zipcode' : field}
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
              <button className="button is-primary is-medium mt-4" type="button" onClick={handleSignup}>
                Sign Up
              </button>
              <p className="content is-medium has-text-primary mt-5">
                Already have an account? <LogIn />
              </p>
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
            <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
