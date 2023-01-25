import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth"
import './Login.css'
import useTitle from "../../Shared File/useTitle/useTitle";

const Login = () => {
  useTitle("Login")
  const {signIn,signInWithGoogle} = useContext(AuthContext)
  const provider = new GoogleAuthProvider();

  const handleLoginForm = (event) => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email,password)
    
    signIn(email,password)
    
  }
  const handleSignInWithGoogle = () => {
    signInWithGoogle(provider)
  }
  
  return (
    <div style={{margin:'50px 0'}}>
      <h2 style={{textAlign:'center'}}>Sign In</h2>
      <form onSubmit={handleLoginForm} className="form-container">
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input name="email" type="email" placeholder="Write your email"></input>
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input name="password" type="password" placeholder="Write your password"></input>
        </div>
        <input className="input-btn" type="submit" value="Sign In"></input>
      </form>
      <p className="form-link-container">
        New to Ema-john?
        <Link className="form-link" to="/signup">
          Create an account
        </Link>
      </p>
      <div className="or-container">
        <hr></hr>
        <p>Or</p>
        <hr></hr>
      </div>
      <input
      onClick={handleSignInWithGoogle}
        className="google-btn"
        type="submit"
        value="Continue with Google"
      ></input>
    </div>
  );
};

export default Login;
