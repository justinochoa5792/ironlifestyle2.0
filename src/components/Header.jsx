import React from "react";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdbreact";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <MDBIcon icon="home" size="3x" />
      </Link>
      <h2 style={{ fontWeight: " bold" }}>Iron Lifestyle</h2>
    </div>
  );
};

export default Header;
