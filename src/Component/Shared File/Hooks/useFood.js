import React, { useEffect, useState } from "react";

const useFood = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("fooditems.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return[data,setData]
};

export default useFood;
