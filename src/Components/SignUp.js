import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LogIn from './LogIn';

const API = process.env.REACT_APP_API_URL;
// createUserWithEmailAndPassword in line 3


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
   //usestate for modal
   const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async () => {
    const auth = getAuth();
    console.log(auth)

    try {
      if (!email || !password || !username) {
        setError('Please fill in all fields.');
        return;
      }
  
      // const userCredential = await createUserWithEmailAndPassword(auth, email, password,address);
  
      // Update the user's display name (username)
      await updateProfile(auth.currentUser, { displayName: username });
  
      // Make an API call to your backend to insert the user's data into the profile table
      const response = await axios.post(`${API}/profiles`, {
        username,
        password,
        email,
        address
      });
  
      console.log(response);
      console.log(response.status);
  
      if (response.status === 200) {
        setError('');
        navigate('/dashboard', {replace: true});
          //close modal
      setIsModalOpen(false);
      } else {
        setError('Failed to sign up. Please try again.');
      }
    } catch (error) {
      console.error("Sign-up error:", error.response)
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
    <button className="button is-primary is-small" onClick={openModal}>
     Sign Up
   </button>
 
 
 {isModalOpen && (
    <div className="modal is-active">
  <div className="modal-background"></div>
  <div className='modal-content has-background-info py-5 px-5'>
    <h3 className='title is-1 has-text-primary'> Join CareVillage </h3>
    <form>
      <div className='field'>
        <label className='label is-large has-text-danger'>Email</label>
        <div className='control'>
        <input
        className="input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
        </div>
        
        <div className='field'>
          <label className='label is-large has-text-danger'>Password</label>
          <div className='control'>
            <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
          </div>
        </div>
      
        <div className='field'>
          <label className='label is-large has-text-danger'>Username</label>
          <div className='control'>
            <input
            className="input"
             type="text"
             placeholder="Username"
             value={username}
             onChange={(e) => setUsername(e.target.value)}/>
          </div>
        </div>
        
        <div className='field'>
          <label className='label is-large has-text-danger'>Address</label>
          <div className='control'>
            <input
            className="input"
             type="address"
             placeholder="Address"
             value={address}
             onChange={(e) => setAddress(e.target.value)}/>
          </div>
        </div>

        <button className='button is-primary is-medium mt-4' onClick={handleSignup}>Sign Up</button>
        <p className='content is-medium has-text-primary mt-5'>
        Already have an account? <LogIn/>
        
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
