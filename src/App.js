import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import MuscleGroup from "./components/MuscleGroup";
import Exercises from "./components/Exercises";
import Recipes from "./components/Recipes";
import Youtube from "./components/Youtube";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          component={(props) => <Home {...props} />}
        ></Route>
        <Route
          exact
          path="/musclegroups"
          component={(props) => <MuscleGroup {...props} />}
        ></Route>
        <Route
          exact
          path="/exercise/:exerciseName"
          component={(props) => <Exercises {...props} />}
        ></Route>
        <Route
          exact
          path="/recipes"
          component={(props) => <Recipes {...props} />}
        ></Route>
        <Route
          exact
          path="/videos"
          component={(props) => <Youtube {...props} />}
        ></Route>
      </Switch>
    </div>
  );
};

export default App;
