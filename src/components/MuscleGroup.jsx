import React from "react";
import Exercises from "../data.json";
import Card from "./Cards";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Link } from "react-router-dom";
import "../App.css";

const MuscleGroup = () => {
  const showMuscleGroup = () => {
    let muscleArr = Object.keys(Exercises);

    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <Link to={`/exercise/${muscleArr[0]}`}>
              <Card name={muscleArr[0]} />
            </Link>
          </MDBCol>
          <MDBCol>
            <Link to={`/exercise/${muscleArr[1]}`}>
              <Card name={muscleArr[1]} />
            </Link>
          </MDBCol>
          <MDBCol>
            <Link to={`/exercise/${muscleArr[2]}`}>
              <Card name={muscleArr[2]} />
            </Link>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol>
            <Link to={`/exercise/${muscleArr[3]}`}>
              <Card name={muscleArr[3]} />
            </Link>
          </MDBCol>
          <MDBCol>
            <Link to={`/exercise/${muscleArr[4]}`}>
              <Card name={muscleArr[4]} />
            </Link>
          </MDBCol>
          <MDBCol>
            <Link to={`/exercise/${muscleArr[5]}`}>
              <Card name={muscleArr[5]} />
            </Link>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol>
            <Link to={`/exercise/${muscleArr[6]}`}>
              <Card name={muscleArr[6]} />
            </Link>
          </MDBCol>
          <MDBCol>
            <Link to={`/exercise/${muscleArr[7]}`}>
              <Card name={muscleArr[7]} />
            </Link>
          </MDBCol>
          <MDBCol>
            <Link to={`/exercise/${muscleArr[8]}`}>
              <Card name={muscleArr[8]} />
            </Link>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol>
            <Link to={`/exercise/${muscleArr[9]}`}>
              <Card name={muscleArr[9]} />
            </Link>
          </MDBCol>
          <MDBCol>
            <Link to={`/exercise/${muscleArr[10]}`}>
              <Card name={muscleArr[10]} />
            </Link>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
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
