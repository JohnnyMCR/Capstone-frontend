import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    const auth = getAuth();
    console.log("Button Clicked");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError("");

      navigate("/");

      setIsModalOpen(false);
    } catch (error) {
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
      {/* <button className="button is-outlined is-primary has-text-primary has-text-weight-bold is-rounded" type="button" onClick={openModal}>
        Login
      </button> */}
      <button
        className="button custom-button is-outlined is-primary has-text-primary has-text-weight-bold is-rounded"
        type="button"
        onClick={openModal}
        style={{
          boxShadow: "none",
          backgroundColor: "transparent",
          color: "inherit",
        }}
      >
        LOGIN
      </button>

      {isModalOpen && (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-content has-background-info py-5 px-5">
            <div className="columns">
              <h1 className="modal-card-title title is-3 has-text-primary has-text-left py-3 px-6">
                Login To Care Village{" "}
              </h1>
              <button
                className="delete is-medium mb-5 has-text-right"
                aria-label="close"
                onClick={closeModal}
              ></button>
            </div>

            <form>
              <div className="field px-6">
                {/* <label className="label is-large has-text-danger mt-5">Email</label> */}
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

              <div className="field px-6">
                {/* <label className="label is-large has-text-danger">Password</label> */}
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

              {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
            <div className="columns">
              <div>
                <p className="content is-medium px-6  pt-6  has-text-link has-text-left">
                  Forgot Password? <p className="content mt-3"></p>
                </p>
                <div>
                  <p className="content is-medium has-text-link px-6 has-text-left">
                    Don't Have An Account? <p className="content mt-3"></p>
                    <SignUp />
                  </p>
                </div>
              </div>
              <div className="column has-text-right">
                <button
                  className="button is-primary is-rounded is-medium mt-6"
                  type="button"
                  onClick={() => handleLogin()}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={() => closeModal()}
          ></button>
        </div>
      )}
    </>
  );
};

export default LogIn;

