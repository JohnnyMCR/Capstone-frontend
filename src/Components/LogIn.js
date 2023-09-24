import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import SignUp from './SignUp';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    const auth = getAuth();
    console.log("Button Clicked")

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError('');

      navigate('/');
    
      setIsModalOpen(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const openModal = () => {
    console.log("Open Modal")
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log('Close Modal')
    setIsModalOpen(false);
  };

  return (
    <>
      <button className="button is-warning is-small" type="button" onClick={openModal}>
        Login
      </button>

      {isModalOpen && (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className='modal-content has-background-info py-5 px-5'>
          <header className="modal-card-head">
            <h1 className="modal-card-title title is-2 has-text-danger">Log In CareVillage</h1>
            <button className="delete is-medium mb-5" aria-label="close" onClick={closeModal}></button>
          </header>
  
            <form>
              <div className="field">
                <label className="label is-large has-text-danger mt-5">Email</label>
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

              <button className="button is-warning is-medium mt-3" type='button' onClick={() => handleLogin()}>Login</button>
              {error && <p style={{ color: 'red' }}>{error}</p>}

            </form>
              <p className='content is-medium mt-5  has-text-primary'>
                Don't have an account? <p className='content mt-3'><SignUp /></p>
              </p>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={() => closeModal()}></button>
        </div>
      )}
    </>
  )
};

export default LogIn;
