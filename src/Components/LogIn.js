import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = async () => {
    const auth = getAuth();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError('');
      
      // Redirect to the dashboard
      navigate('/dashboard');
      //close modal
      setIsModalOpen(false);
    } catch (error) {
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
    <div>
      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default LogIn;