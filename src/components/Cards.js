import React from "react";

const Cards = (props) => {
  return (
    <div className="card bg-warning text-white container col-3">
      <div className="card-body">
        <img src={props.image} className="card-img-top" alt="..." style={{ height: "300px" }} />
        <p className="card-text">{props.desc}</p>
      </div>
    </div>
  );
};

export default Cards;
