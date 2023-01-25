import React, { useEffect, useState } from "react";
import useFood from "../../../Shared File/Hooks/useFood";
import FoodItem from "../FoodItem/FoodItem";
import "./Fooditems.css";

const FoodItems = () => {
  const [data,setData] = useFood();
  const [foodType, setFoodType] = useState("breakfast");
  const [currentFoods, setCurrentFoods] = useState([]);

  useEffect(() => {
    // alert('ami render hoisi')
    if (data?.productData?.length > 0) {
      findFoods(foodType);
    }
  }, [foodType,data]);

  const findFoods = (food) => {
    if (data?.productData?.length > 0) {
      const findData = data?.productData?.filter(
        (foods) => foods.category === food
      );
      // console.log(findData);
      setCurrentFoods(findData);
    }
  };
  // console.log(foodType);
  return (
    <div>
      <div className="fooditems-container">
        <button onClick={() => setFoodType("breakfast")}>Breakfast</button>
        <div></div>
        <button onClick={() => setFoodType("lunch")}>Lunch</button>
        <div></div>
        <button onClick={() => setFoodType("dinner")}>Dinner</button>
      </div>

      <div className="fooditems-img">
        {currentFoods?.map((foods) => (
          <FoodItem key={foods.id} foods={foods}></FoodItem>
        ))}
      </div>
    </div>
  );
};

export default FoodItems;
