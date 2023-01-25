import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../../firebase.init";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true)

  const navigate = useNavigate();

  const signInWithGoogle = (provider) => {
    setLoading(true)
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        navigate("/cart");
      })
      .catch((error) => {
        // console.log(error);
      });
  };
 
  const createUser = (email, password) => {
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/cart");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signIn = (email, password) => {
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user)
        navigate('/cart')
      })
      .catch((error) => {
        console.log(error)
      });
  };

  const logOut = () => {
    setLoading(true)
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { user,loading, signInWithGoogle, logOut, createUser,signIn };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
