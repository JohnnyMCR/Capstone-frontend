import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import LogIn from "./LogIn";

const API = process.env.REACT_APP_API_URL;

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  console.log("testing component");

  const handleSignup = async () => {
    const auth = getAuth();
    console.log(auth, "test");

    try {
      if (!email || !password || !username) {
        setError("Please fill in all fields.");
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        address
      );
      console.log("User Credential:", userCredential);

      await updateProfile(auth.currentUser, { displayName: username });

      // console.log(auth)
      const response = await axios.post(`${API}/profiles`, {
        username,
        password,
        address,
        email,
      });

      console.log(response);
      console.log(response.status);

      if (response.status === 200) {
        setError("");
        navigate("/", { replace: true });
        setIsModalOpen(false);
      } else {
        setError("Failed to sign up. Please try again.");
      }
    } catch (error) {
      console.error("Sign-up error:", error.response);
      setError(error.message);
    }
  };

  const openModal = () => {
    console.log("Open Modal");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("Close Modal");
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        className="button is-primary mx-1 mb-5 is-rounded mt-5 has-text-weight-bold"
        type="button"
        onClick={openModal}
      >
        SIGN UP
      </button>

      {isModalOpen && (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-content has-background-info py-5 px-5">
            <div className="columns">
              <h1 className="modal-card-title title is-3 has-text-primary has-text-left py-5 px-6 mx-6">
                Sign up for Care Village{" "}
              </h1>
              <button
                className="delete is-medium mb-5 has-text-right"
                aria-label="close"
                onClick={closeModal}
              ></button>
            </div>

            <form>
              {/* <label className='label is-large has-text-danger mt-5'>Email</label> */}
              <div className="field px-6">
                <div className="control px-6 my-3">
                  <input
                    className="input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="field  px-6">
                  {/* <label className='label is-large has-text-danger mt-4'>Password</label> */}
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

                <div className="field  px-6">
                  {/* <label className='label is-large has-text-danger'>Username</label> */}
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>

                <div className="field  px-6">
                  {/* <label className='label is-large has-text-danger'>Address</label> */}
                  <div className="control">
                    <input
                      className="input"
                      type="address"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
                <div className="column ">
                  <button
                    className="button is-medium mt-4 is-outlined is-primary is-rounded has-text-primary mr-6"
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

                  <button
                    className="button is-primary is-rounded is-medium mt-4 ml-6"
                    type="button"
                    onClick={() => handleSignup()}
                  >
                    Sign Up
                  </button>
                </div>

                <div>
                 
                  <p className="content is-medium has-text-balck mt-5">
                    Already have an account?{" "}
                    <p className="has-text-link">
                      Login
                    </p>
                  </p>
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
              </div>
            </form>
            <button
              className="modal-close is-large"
              aria-label="close"
              onClick={() => closeModal()}
            ></button>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
