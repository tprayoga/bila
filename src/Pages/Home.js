import React from "react";
import Headline from "../components/Headline";
import Main from "../components/Main";

const Home = () => {
  return (
    <div>
      <Headline />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#f7c133" fill-opacity="1" d="M0,0L1440,160L1440,0L0,0Z"></path>
      </svg>
      <Main />
    </div>
  );
};

export default Home;
