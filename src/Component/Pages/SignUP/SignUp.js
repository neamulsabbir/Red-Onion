import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useTitle from "../../Shared File/useTitle/useTitle";

const SignUp = () => {
  useTitle("Sign Up")
  const { signInWithGoogle,createUser } = useContext(AuthContext);

  const handleSubmitForm= (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    // console.log(name,email,password,confirmPassword)
    
    createUser(email,password)
    
  }

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithGoogle(googleProvider)
  };
  
  return (
    <div style={{ margin: "50px 0" }}>
      <h2 style={{ textAlign: "center" }}>Sign Up</h2>
      <form onSubmit={handleSubmitForm} className="form-container">
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input name="name" type="name" placeholder="Write your email"></input>
          <p style={{ color: "red", margin: "0 0 5px 0" }}></p>
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input name="email" type="email" placeholder="Write your email"></input>
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input name="password" type="password" placeholder="Password"></input>
        </div>
        <div className="input-field">
          <label htmlFor="password">Confirm Password</label>
          <input name="confirmPassword" type="password" placeholder="Confirm Password"></input>
        </div>
        <input className="input-btn" type="submit" value="Sign Up"></input>
      </form>
      <p className="form-link-container">
        New to Red Onion?
        <Link className="form-link" to="/login">
          Log In
        </Link>
      </p>
      <div className="or-container">
        <hr></hr>
        <p>Or</p>
        <hr></hr>
      </div>
      <input
        onClick={handleGoogleSignIn}
        className="google-btn"
        type="submit"
        value="Continue with Google"
      ></input>
    </div>
  );
};

export default SignUp;
