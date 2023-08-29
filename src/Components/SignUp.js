import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const API = process.env.REACT_APP_API_URL;



const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSignup = async () => {
    const auth = getAuth();

    try {
      if (!email || !password || !username) {
        setError('Please fill in all fields.');
        return;
      }
  
      const userCredential = await createUserWithEmailAndPassword(auth, email, password,address);
  
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
      } else {
        setError('Failed to sign up. Please try again.');
      }
    } catch (error) {
      console.error("Sign-up error:", error.response)
      setError(error.message);
    }
  };
  
  

  return (
    <div>
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="address"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
      <p>
        Already have an account? <Link to="/login">Log in</Link>

      </p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SignUp;
