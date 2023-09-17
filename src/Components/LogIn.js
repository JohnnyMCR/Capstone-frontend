import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import SignUp from './SignUp';



const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  //usestate for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = async () => {
    const auth = getAuth();
    console.log(auth)

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
    <>
       <button className="button is-warning is-small" onClick={openModal}>
        Login
      </button>
    
    
    {isModalOpen && (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className='modal-content has-background-info py-5 px-5'>
        <h3 className='title is-1 has-text-primary'> Log In CareVillage </h3>
        <form>
          <div className="field">
            <label className="label is-large has-text-danger">Email</label>
            <div className="control">
            <input
                className="input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
          </div>
        
          <div className="field">
            <label className="label is-large has-text-danger">Password</label>
            <div className="control">
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        
          <button className="button is-warning is-medium mt-3" onClick={handleLogin}>Login</button>
               <p className='content is-medium mt-5 has-text-primary'>
                 Don't have an account? <SignUp/>
               </p>
               {error && <p style={{ color: 'red' }}>{error}</p>}
             
        </form>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
      </div>
    )}
</>
    )};

export default LogIn;
