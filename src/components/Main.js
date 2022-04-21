import React from "react";
import Cards from "./Cards";
import { Data } from "./datadummys";

const Main = () => {
  return (
    <div className="mt-0 container">
      <h3>What We Do</h3>
      <h1 className="display-3">OUR ACTIVITIES</h1>
      <div className="d-flex justify-content-center mt-5" style={{ gap: "10px" }}>
        {Data.map((item) => {
          return <Cards image={item.image} desc={item.desc} />;
        })}
      </div>
    </div>
  );
};

export default Main;
