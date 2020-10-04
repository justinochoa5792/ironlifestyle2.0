import React from "react";
import "../App.css";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Home = () => {
  return (
    <div className="home">
      <MDBContainer className="mt-5 text-center">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron>
              <h2 className="h1 display-3">Iron Lifestyle</h2>
              <p className="lead">
                A total wellness app to help with you achieve your fitness
                goals!
              </p>
              <hr className="my-2" />
              <p>
                Provides an extensive list of exercises, recipes, and videos.
              </p>
              <p className="lead">
                <MDBBtn color="primary" href="/musclegroups">
                  Exercises
                </MDBBtn>
                <MDBBtn color="primary" href="/recipes">
                  Recipes
                </MDBBtn>
                <MDBBtn color="primary" href="/videos">
                  Videos
                </MDBBtn>
              </p>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Home;
