import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <h1>Iron Lifestyle</h1>
      <Link to="/musclegroups">Exercises</Link>
      <Link to="/recipes">Recipes</Link>
      <Link to="/videos">Videos</Link>
    </div>
  );
};

export default Home;
