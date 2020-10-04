import React from "react";
import ReactPlayer from "react-player";
import "../App.css";

const Youtube = () => {
  return (
    <div className="App">
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/user/bodybuildingcomvideo"
        controls="true"
      />
    </div>
  );
};

export default Youtube;
