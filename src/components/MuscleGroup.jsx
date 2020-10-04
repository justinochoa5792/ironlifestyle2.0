import React from "react";
import Exercises from "../data.json";
import { Link } from "react-router-dom";
import "../App.css";

const MuscleGroup = () => {
  const showMuscleGroup = () => {
    let muscleArr = Object.keys(Exercises);

    return (
      <ul>
        <Link to={`/exercise/${muscleArr[0]}`}>
          <li>{muscleArr[0]}</li>
        </Link>
        <Link to={`/exercise/${muscleArr[1]}`}>
          <li>{muscleArr[1]}</li>
        </Link>
        <Link to={`/exercise/${muscleArr[2]}`}>
          <li>{muscleArr[2]}</li>
        </Link>
        <Link to={`/exercise/${muscleArr[3]}`}>
          <li>{muscleArr[3]}</li>
        </Link>
        <Link to={`/exercise/${muscleArr[4]}`}>
          <li>{muscleArr[4]}</li>
        </Link>
        <Link to={`/exercise/${muscleArr[5]}`}>
          <li>{muscleArr[5]}</li>
        </Link>
        <Link to={`/exercise/${muscleArr[6]}`}>
          <li>{muscleArr[6]}</li>
        </Link>
        <Link to={`/exercise/${muscleArr[7]}`}>
          <li>{muscleArr[7]}</li>
        </Link>
        <Link to={`/exercise/${muscleArr[8]}`}>
          <li>{muscleArr[8]}</li>
        </Link>
        <Link to={`/exercise/${muscleArr[9]}`}>
          <li>{muscleArr[9]}</li>
        </Link>
        <Link to={`/exercise/${muscleArr[10]}`}>
          <li>{muscleArr[10]}</li>
        </Link>
      </ul>
    );
  };

  return (
    <div className="App">
      <h1>Muscle Groups</h1>
      {showMuscleGroup()}
    </div>
  );
};

export default MuscleGroup;
