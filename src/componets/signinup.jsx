import React, { useState } from "react";
import "./signin.css";

function Signin({ closeModal }) {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  return (
    <><style>{`background-color:rgb(48, 45, 45);`}</style>
    <div className="modal right-panel-active">
      <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
        <div className="form-container sign-up-container">
        <button type="button" className="btn btn-secondary mt-3 rounded-circle left " onClick={()=>closeModal(true)} aria-label="Close modal" >
              X
            </button>
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Sign Up</button>
            
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#" onSubmit={(e) => e.preventDefault()}>
          <button
              type="button"
              className="btn btn-secondary mt-3 rounded-circle"
              onClick={()=>closeModal(true)}
              aria-label="Close modal"
            >
              X
            </button>
            <h1>Sign in</h1>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <a href="#">Forgot your password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="text-white">Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" onClick={() => setIsRightPanelActive(false)}>Sign In</button>
            </div>
            
            <div className="overlay-panel overlay-right">
              <h1 className="text-white">Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button className="ghost" onClick={() => setIsRightPanelActive(true)}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
}

export default Signin;
