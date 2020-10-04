import React from "react";
import exercises from "../data.json";
import { Link } from "react-router-dom";
import "../App.css";

const Exercises = (props) => {
  const showExercises = () => {
    let muscle = props.match.params.exerciseName;
    let newArr = exercises[muscle].map((eachExer) => {
      return <h2 key={eachExer}>{eachExer}</h2>;
    });
    return newArr;
  };
  return (
    <div className="App">
      <Link to="/musclegroups">Back</Link>
      {showExercises()}
    </div>
  );
};

export default Exercises;
