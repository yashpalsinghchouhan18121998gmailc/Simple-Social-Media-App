import React from "react";
import "../App.css";

const WelcomeMsg = ({ handleOnClick }) => {
  return (
    <div className="flx">
      <div>
        <h1>No posts to show get posts from server </h1>
      </div>
      <button className="flx-btn" onClick={handleOnClick}>
        Fetch data
      </button>
    </div>
  );
};

export default WelcomeMsg;
