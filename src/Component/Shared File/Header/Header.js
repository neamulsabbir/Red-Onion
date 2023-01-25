import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo2.png";
import {
  faBars,
  faCartShopping,
  
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = ({ size }) => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut();
  };
  return (
    <nav className="nav-container">
      <Link to="/">
        <img src={logo} alt=""></img>
      </Link>
      <div className="nav-details">
        <Link to="/">Home</Link>
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
          <span style={{ color: "red" }}>{size}</span>
        </Link>
        {user?.uid ? (
          <div className="user-info">
            <button
              onClick={handleSignOut}
              style={{ marginLeft: "40px", cursor: "pointer" }}
              className="nav-signup"
            >
              Sign Out
            </button>
            <p>{user?.displayName?.substring(0, 6)}</p>
            <img
              style={{
                width: "30px",
                marginLeft: "10px",
                borderRadius: "50px",
              }}
              src={user?.photoURL}
              alt=""
            />
          </div>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link className="nav-signup" to="/signup">
              <span style={{ color: "white" }}>Sign Up</span>
            </Link>
          </>
        )}
        <div className="menu-icon">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
