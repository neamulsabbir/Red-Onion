import React from "react";
import { Link } from "react-router-dom";
import "./ChefDetail.css";

const ChefDetail = ({ info }) => {
    // console.log(info)
    const {slag} = info;
    
  return (
    <div className="chefdetail-container">
      <img src={info?.img} alt=""></img>
      <div className="chefdetail-headline">
        <img style={{ width: "30px",height:'30px' }} src={info?.icon} alt=""></img>
        <p>{info?.name}</p>
      </div>
      <p className="chefdescription">
        <small>
          {info?.description.substring(0,80) + '.'}
        </small>
      </p>
      <Link
        style={{ marginLeft: "70px", textDecoration: "none" }}
       to={`/chefInfo/${slag}`}
        >
        <small style={{fontWeight:500,color:'blue'}}>See More</small>
      </Link>
    </div>
  );
};

export default ChefDetail;
