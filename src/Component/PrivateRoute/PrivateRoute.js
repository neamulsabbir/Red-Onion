import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import React from 'react'
import { Spinner } from "react-bootstrap";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        <Spinner animation="border" variant="primary" />
    }
    if(!user){
        return <Navigate to='/login'></Navigate>
    }
    return children;
    
};

export default PrivateRoute;