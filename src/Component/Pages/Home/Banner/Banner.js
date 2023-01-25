import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-img">
      <div className="banner-container">
        <div className="search">
          <h1 className="banner-tittle">Best food waiting for your belly</h1>
          <div className="input-container">
            <input type="text" placeholder="Search food item"></input>
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
