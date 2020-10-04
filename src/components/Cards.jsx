import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";

const Cards = (props) => {
  return (
    <MDBRow>
      <MDBCol md="4">
        <MDBCard style={{ width: "16rem", margin: "10px" }}>
          <MDBCardImage
            top
            src="/images/rogue-dumbbells-h.jpg"
            overlay="white-slight"
            hover
            waves
            alt="MDBCard image cap"
          />
          <MDBCardBody className="elegant-color white-text rounded-bottom">
            <MDBCardTitle>{props.name}</MDBCardTitle>
            <hr className="hr-light" />
            <a
              href={props.link}
              className="black-text d-flex justify-content-end"
            >
              <h5 className="white-text">
                Go to Exercises
                <MDBIcon icon="angle-double-right" className="ml-2" />
              </h5>
            </a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export default Cards;
