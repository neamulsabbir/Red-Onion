import React from "react";
import ChefDetail from "../ChefDetail/ChefDetail";
import "./ChefDetails.css";

const ChefDetails = ({ detail }) => {
//   console.log(detail);
  return (
    <div>
      <p className="choose-tittle">{detail?.tittle}</p>
      <p sm={12} className="choose-detail">{detail?.details}</p>

      <div className="chef-container" style={{marginTop: "40px",marginBottom:'40px'}}>
        {
            detail?.chefInfo?.map(info => <ChefDetail key={info.id} info={info}></ChefDetail>)
        }
        
      </div>
    </div>
  );
};

export default ChefDetails;
