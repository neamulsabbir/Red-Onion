import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../Shared File/useTitle/useTitle";
import "./FoodItem.css";

const FoodItem = ({ foods }) => {
  
  const { slag } = foods;
  return (
    <div className="fooditem-container">
      <Link sm={12} style={{  textDecoration: "none" }} to={`/fooddetails/${slag}`}>
        <img src={foods?.img} alt="" />
        <div class="fooditem-detail">
          <p>{foods.name}</p>
          <p>{foods.tittle}</p>
          <h3>${foods.price}</h3>
        </div>
      </Link>
    </div>
  );
};

export default FoodItem;
