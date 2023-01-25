import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useTitle from "../../../Shared File/useTitle/useTitle";
import "./FoodDetails.css";

const FoodDetails = ({handleAddToCart,error}) => {
  useTitle('Food Detail')
  const { detail } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/fooditems.json")
      .then((res) => res.json())
      .then((data) => {
        const findData = data?.productData?.find(
          (foods) => foods?.slag === detail
        );
        setData(findData);
      });
  }, []);

  return (
    <div className="fooddetails-container">
      <div className="fooddetails" style={{ marginRight: "100px" }}>
        <h1>{data.name}</h1>
        <p className="fooddetails-details">{data.details}</p>
        <div className="price-container">
          <p className="details-price">${data.price}</p>
        </div>
        <div >
            <button className="add-btn">
              <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
              <span onClick={() =>handleAddToCart(data)} style={{ marginLeft: "10px" }}>Add</span>
            </button>
            <p style={{margin:'10px 0', color:'red',fontWeight:'400'}}>{error}</p>
          </div>
      </div>
      <img src={data.img} alt="" />
    </div>
  );
};

export default FoodDetails;
