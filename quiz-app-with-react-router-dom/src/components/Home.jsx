import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = (props) => {
  return (
    <div className="main-container-home">
      <h2>Quiz App</h2>
      <Link to={"/quiz"}>
        <button
          className="play-btn"
          onClick={() => {
            props.setQuesNo(0);
          }}
        >
          Play
        </button>
      </Link>
    </div>
  );
};

export default Home;
